import { Skill } from '../skill.js';

const skill = new Skill('ResistSpell');
skill.friendly('Resist Spell');
skill.costs({ Adept: 5, Artisan: 5, Fighter: 5, Rogue: 5, Scholar: 5, Scout: 5, Spellsword: 5 });
skill.category('Racial');
skill.allowsLimitlessRanks();
skill.bonusBody();

export { skill };
