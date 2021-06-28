import { pages, School, Upgrades } from 'att-voodoo-spellbook';
import * as spells from './spells';
import { VoodooServer } from '..';
import { xpGain } from './experience';

export type Spell = {
  name: string;
  school: School;
  cast: (voodoo: VoodooServer, accountId: number) => Promise<void>;
  requiresPreparation: boolean;
  verbalTrigger?: string;
  upgrades: Upgrades;
};

export type Spellbook = {
  spells: Map<string, Spell>;
  get: (incantations: [string, string][]) => Spell | undefined;
};

export type SpellFunction = (voodoo: VoodooServer, accountId: number, upgrades: Upgrades) => Promise<void>;

export const spellbook: Spellbook = {
  spells: new Map(
    Object.entries(spells)
      .filter(([spellName]) => pages.hasOwnProperty(spellName))
      .map(([spellName, spell]) => {
        const { incantations, school, upgrades } = pages[spellName];

        return [
          JSON.stringify(incantations),
          {
            cast: async (voodoo, accountId) => {
              await spell(voodoo, accountId, upgrades);

              const amount = xpGain(incantations.length);
              voodoo.addExperience({ accountId, school, amount });
            },
            ...pages[spellName]
          }
        ];
      })
  ),

  get: function (incantations: [string, string][]) {
    const key = JSON.stringify(incantations);
    return this.spells.get(key);
  }
};
