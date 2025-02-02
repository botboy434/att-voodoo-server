import { RequestHandler } from 'express';
import { db } from '../../db';
import { VoodooServer } from '../../voodoo';
import { selectSession, upsertHeartbeat } from '../../db/sql';

export const getHeartbeat =
  (voodoo: VoodooServer): RequestHandler =>
  async (clientRequest, clientResponse) => {
    const auth = clientRequest.headers.authorization ?? '';

    try {
      /* Verify the player. */
      const accessToken = auth.replace(/Bearer\s+/i, '');
      const session = await db.query(selectSession, [accessToken]);

      if (!session.rows.length) return clientResponse.status(404).json({ ok: false, error: 'Session not found' });

      /* Save heartbeat. */
      await db.query(upsertHeartbeat, [accessToken]);

      /* Get account ID. */
      const accountId = session.rows[0].account_id;

      /* Update player's Voodoo client status. */
      if (voodoo.players[accountId] && !voodoo.players[accountId].isVoodooClient) {
        voodoo.setPlayerClientStatus({ accountId, isVoodooClient: true });
      }

      /* Return servers update. */
      const update = {
        playerJoined: voodoo.players[accountId]?.serverId ?? null,
        servers: [...voodoo.servers]
      };

      clientResponse.json({ ok: true, result: update });
    } catch (error) {
      clientResponse.status(500).json({ ok: false, error: error.message });
    }
  };
