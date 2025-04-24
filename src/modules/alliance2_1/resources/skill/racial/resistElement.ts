import { Skill } from '../skill.js';

const skill = new Skill('ResistElement');
skill.friendly('Resist Element');
skill.costs({ Adept: 3, Artisan: 3, Fighter: 3, Rogue: 3, Scholar: 3, Scout: 3, Spellsword: 3 });
skill.category('Racial');
skill.allowsLimitlessRanks();
skill.bonusBody();

export { skill };
