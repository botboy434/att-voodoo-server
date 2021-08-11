import { SpellFunction } from '../spellbook';
import { getSpellAttributes } from '../experience';
import { spawnFrom } from '../spawnFrom';
import { PrefabHash, SpeciesHash } from 'att-string-transcoder';
import { spawn } from '../spawn';
import { composeTree, generateComposition } from '../utils';

export const raiseOakTree: SpellFunction = async (voodoo, accountId, upgradeConfigs) => {
  const upgrades = voodoo.getSpellUpgrades({ accountId, spell: 'raiseOakTree' });
  const attributes = getSpellAttributes(upgrades, upgradeConfigs);

  const terminationRate = 1 / attributes.arborist;
  const tree = generateComposition(terminationRate);
  const childPrefabs = composeTree(tree);

  const player = await voodoo.getPlayerDetailed({ accountId });
  const rightHand = spawnFrom(player, 'rightPalm', 1);

  spawn(voodoo, accountId, {
    prefabObject: {
      hash: PrefabHash.Tree,
      position: rightHand.position
    },
    components: {
      NetworkRigidbody: {
        position: rightHand.position,
        isKinematic: true
      },
      WoodcutTree: {
        speciesHash: SpeciesHash.Oak
      }
    },
    childPrefabs: [childPrefabs]
  });

  voodoo.command({ accountId, command: 'select snap-ground' });

  const { name, serverId, serverName } = voodoo.players[accountId];
  voodoo.logger.success(`[${serverName ?? serverId} | ${name}] cast Raise Oak Tree`);
};
