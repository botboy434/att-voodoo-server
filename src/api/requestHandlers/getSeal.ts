import { RequestHandler } from 'express';
import { db } from '../../db';
import { VoodooServer, PreparedSpells, spawn, spawnFrom } from '../../voodoo';
import { Prefab } from 'att-string-transcoder';
import { selectSession } from '../../db/sql';

export const getSeal =
  (voodoo: VoodooServer): RequestHandler =>
  async (clientRequest, clientResponse) => {
    const auth = clientRequest.headers.authorization ?? '';

    try {
      /* Verify the player. */
      const accessToken = auth.replace(/Bearer\s+/i, '');
      const session = await db.query(selectSession, [accessToken]);

      if (!session.rows.length) return clientResponse.status(404).json({ ok: false, error: 'Session not found' });

      const accountId = session.rows[0].account_id;


      /* Get the player's current incantations. */
      const incantations = voodoo.players[accountId].incantations.map(
        ({ verbalSpellComponent, materialSpellComponent }) => [verbalSpellComponent, materialSpellComponent]
      ) as [string, string][];

      /* Search for spell in spellbook matching player's incantations. */
      const spell = voodoo.spellbook.get(incantations);

      let preparedSpells: PreparedSpells = [];

      if (spell) {
        if (spell.requiresPreparation) {
          /* Store the spell with a trigger. */
          preparedSpells = await voodoo.prepareSpell({ accountId, incantations, spell });
        } else {
          /* Cast the spell immediately. */
          await spell.cast(voodoo, accountId);
        }

        /* Award XP. */
        await spell.xp(voodoo, accountId);
      } else {
        if (incantations[0]?.[1] === 'hilted apparatus') {
          const { prefab } = voodoo.players[accountId].incantations[0].decodedString;
          const player = await voodoo.getPlayerDetailed({ accountId });
          const { position, rotation } = spawnFrom(player, 'rightPalm', 0.05);

          const respawn: Prefab = {
            ...prefab,
            prefabObject: {
              ...prefab.prefabObject,
              position,
              rotation,
              scale: 1
            },
            components: {
              ...prefab.components,
              NetworkRigidbody: {
                ...prefab.components?.NetworkRigidbody,
                position,
                rotation
              }
            }
          };

          spawn(voodoo, accountId, respawn);
        }
        // @todo somehow feedback that there was no spell associated
      }

      /* Clear player's incantations. */
      const newIncantations = voodoo.clearIncantations({ accountId });

      if (newIncantations.length) {
        return clientResponse.status(500).json({
          ok: false,
          error: "Couldn't clear your incantations"
        });
      }

      if (preparedSpells.length) {
        clientResponse.json({
          ok: true,
          result: {
            experience: voodoo.players[accountId].experience,
            incantations,
            preparedSpells
          }
        });
      } else {
        clientResponse.json({
          ok: true,
          result: {
            experience: voodoo.players[accountId].experience,
            incantations
          }
        });
      }
    } catch (error) {
      voodoo.logger.error(error);
      clientResponse.status(500).json({ ok: false, error: error.message });
    }
  };
