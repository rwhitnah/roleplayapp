import { Skill } from '../skill.js';

const skill = new Skill('Merchant');
skill.category('Trade');
skill.costs({ Adept: 2, Artisan: 1, Fighter: 3, Rogue: 1, Scholar: 3, Scout: 2, Spellsword: 3 });

export { skill }
