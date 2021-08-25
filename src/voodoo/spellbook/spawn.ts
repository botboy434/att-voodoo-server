import { VoodooServer } from '..';
import { createString, Prefab } from 'att-string-transcoder';

export const spawn = (voodoo: VoodooServer, accountId: number, prefab: Prefab) => {
  const spawnString = createString(prefab);

  return voodoo.command({ accountId, command: `trade post string-raw ${spawnString}` });
};
