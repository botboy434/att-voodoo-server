import { VoodooServer } from '..';

export const spawn = (voodoo: VoodooServer, accountId: number, prefabhash: number) => {
  return voodoo.command({ accountId, command: `trade post ${accountId} ${prefabhash}` });
}