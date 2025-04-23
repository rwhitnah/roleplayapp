import { Skill } from '../skill.js';

const skill = new Skill('RacialResolute');
skill.friendly('Racial Resolute');
skill.costs({ Adept: 2, Artisan: 2, Fighter: 2, Rogue: 2, Scholar: 2, Scout: 2, Spellsword: 2 });
skill.category('Racial');
skill.allowsLimitlessRanks();

export { skill };
