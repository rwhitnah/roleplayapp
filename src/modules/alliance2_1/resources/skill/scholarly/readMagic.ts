import { Skill } from '../skill.js';

const skill = new Skill('ReadMagic');
skill.friendly('Read Magic');
skill.category('Scholarly');
skill.costs({
  Fighter: 8,
  Scout: 8,
  Rogue: 6,
  Adept: 4,
  Scholar: 4,
  Spellsword: 4,
  Artisan: 6,
});
skill.requireSkill('Educated');
export { skill };
