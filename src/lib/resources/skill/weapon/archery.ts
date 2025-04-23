import { Skill } from '../skill.js';

const skill = new Skill('Archery');
skill.friendly('Archery');
skill.category('Weapon');
skill.costs({
  Fighter: 6,
  Scout: 6,
  Rogue: 6,
  Adept: 8,
  Scholar: 12,
  Spellsword: 8,
  Artisan: 8,
});

skill.allowsLimitlessRanks();

skill.requireSkill('Educated');

export { skill };
