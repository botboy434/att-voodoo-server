import { SpellFunction } from '../spellbook';
import { getSpellAttributes } from '../experience';
import { getNearbySoulbonds } from '../getNearbySoulbonds';

type PlayerCheckStatHealthResponse = {
  Result?: {
    Value: number;
  };
};

export const healWounds: SpellFunction = async (voodoo, accountId, upgradeConfigs) => {
  const upgrades = voodoo.getSpellUpgrades({ accountId, spell: 'healWounds' });
  const attributes = getSpellAttributes(upgrades, upgradeConfigs);

  const value = attributes.intensify / 4;
  const searchRadius = attributes.projection;

  let nearbySoulbondIds: number[] = [];

  if (searchRadius > 0) {
    const nearbySoulbonds = await getNearbySoulbonds(voodoo, accountId, searchRadius);
    nearbySoulbondIds = nearbySoulbonds.map(soulbond => soulbond.id);
  }

  const playerIds = [accountId, ...nearbySoulbondIds];

  for (const playerId of playerIds) {
    const healthResponse: PlayerCheckStatHealthResponse = await voodoo.command({
      accountId,
      command: `player check-stat ${playerId} health`
    });

    if (healthResponse.Result) {
      const healedHealth = healthResponse.Result.Value + value;

      voodoo.command({ accountId, command: `player set-stat ${playerId} health ${healedHealth}` });
    }
  }

  const { name, serverId, serverName } = voodoo.players[accountId];
  voodoo.logger.success(`[${serverName ?? serverId} | ${name}] cast Heal Wounds`);
};
