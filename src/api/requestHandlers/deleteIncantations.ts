import { RequestHandler } from 'express';
import { db } from '../../db';
import { VoodooServer, spawn, spawnFrom } from '../../voodoo';
import { Prefab } from 'att-string-transcoder';
import { selectSession } from '../../db/sql';

export const deleteIncantations =
  (voodoo: VoodooServer): RequestHandler =>
  async (clientRequest, clientResponse) => {
    const auth = clientRequest.headers.authorization ?? '';

    try {
      /* Verify the player. */
      const accessToken = auth.replace(/Bearer\s+/i, '');
      const session = await db.query(selectSession, [accessToken]);

      if (!session.rows.length) {
        return clientResponse.status(404).json({
          ok: false,
          error: 'Session not found'
        });
      }

      /* Respawn consumed weapon, if any. */
      const accountId = session.rows[0].account_id;

      if (voodoo.players[accountId].incantations[0]?.materialSpellComponent === 'hilted apparatus') {
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

      /* Clear player's incantations. */
      const incantations = voodoo.clearIncantations({ accountId });

      if (incantations.length) {
        return clientResponse.status(500).json({
          ok: false,
          error: "Couldn't clear your incantations"
        });
      }

      clientResponse.json({ ok: true, result: incantations });
    } catch (error) {
      voodoo.logger.error(error);
      clientResponse.status(500).json({ ok: false, error: error.message });
    }
  };
