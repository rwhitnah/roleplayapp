import { Skill } from '../skill.js';

const skill = new Skill('ResistCommand');
skill.friendly('Resist Command');
skill.costs({ Adept: 4, Artisan: 4, Fighter: 4, Rogue: 4, Scholar: 4, Scout: 4, Spellsword: 4 });
skill.category('Racial');
skill.allowsLimitlessRanks();
skill.bonusBody();

export { skill };
