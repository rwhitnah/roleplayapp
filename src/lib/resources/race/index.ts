import { race as Biata } from './biata.js';
import { race as DarkElf } from './darkElf.js';
import { race as Dryad } from './dryad.js';
import { race as Dwarf } from './dwarf.js';
import { race as Elf } from './elf.js';
import { race as HighOgre } from './highOgre.js';
import { race as HighOrc } from './biata.js';
import { race as Hobling } from './hobling.js';
import { race as Oathsworn } from './highOgre.js';
import { race as Selunari } from './selunari.js';
import { race as StoneElf } from './stoneElf.js';
import { race as Sylvanborn } from './sylvanborn.js';
import { race as Wylderkin } from './wylderkin.js';
import { type Race } from './race.js';

const races = [Biata, DarkElf, Dryad, Dwarf, Elf, HighOgre, HighOrc, Hobling, Oathsworn, Selunari, StoneElf, Sylvanborn, Wylderkin] as const;
const racesMap = { Biata, 'Dark Elf': DarkElf, Dryad, Dwarf, Elf, 'High Ogre': HighOgre, 'High Orc': HighOrc, Hobling, Oathsworn, Selunari, 'Stone Elf': StoneElf, Sylvanborn, Wylderkin, Human: {} as Race } as const;
export { races, racesMap };
