import { SpellFunction } from '../spellbook';
import { anamnesis, ANAMNESIS_MAP } from './anamnesis';
import { PrefabHash } from 'att-string-transcoder';

export const anamnesisAppleCoreRipe: SpellFunction = async (voodoo, accountId, upgradeConfigs) => {
  const hash = ANAMNESIS_MAP.get(PrefabHash.Apple_Core_Ripe);

  if (!hash) return;

  anamnesis(hash)(voodoo, accountId, upgradeConfigs);

  const { name, serverId, serverName } = voodoo.players[accountId];
  voodoo.logger.success(`[${serverName ?? serverId} | ${name}] cast Anamnesis (ripe apple core)`);
};
