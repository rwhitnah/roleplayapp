import { Skill } from '../skill.js';

const skill = new Skill('Tinkering');
skill.friendly('Tinkering');
skill.costs({ Adept: 4, Artisan: 3, Fighter: 6, Rogue: 3, Scholar: 6, Scout: 4, Spellsword: 6 });
skill.category('Stealth');
skill.allowsLimitlessRanks();
skill.crafting('Tinkering');

export { skill };
