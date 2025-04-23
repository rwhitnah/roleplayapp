import { Skill } from '../skill.js';

const skill = new Skill('RacialEvade');
skill.friendly('Racial Evade');
skill.costs({ Adept: 6, Artisan: 6, Fighter: 6, Rogue: 6, Scholar: 6, Scout: 6, Spellsword: 6 });
skill.category('Racial');
skill.allowsLimitlessRanks();

export { skill };
