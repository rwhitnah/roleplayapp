import { Skill } from '../skill.js';

const skill = new Skill('EnhancedMeditate');
skill.friendly('Enhanced Meditate');
skill.costs([
  { Adept: 1, Artisan: 1, Fighter: 1, Rogue: 1, Scholar: 1, Scout: 1, Spellsword: 1 },
  { Adept: 3, Artisan: 3, Fighter: 3, Rogue: 3, Scholar: 3, Scout: 3, Spellsword: 3 },
  { Adept: 5, Artisan: 5, Fighter: 5, Rogue: 5, Scholar: 5, Scout: 5, Spellsword: 5 },
]);
skill.category('Trade');

export { skill };
