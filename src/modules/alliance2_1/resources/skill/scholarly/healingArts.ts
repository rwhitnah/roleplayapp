import { Skill } from '../skill.js';

const skill = new Skill('HealingArts');
skill.friendly('Healing Arts');
skill.category('Scholarly');
skill.costs({
  Fighter: 6,
  Scout: 6,
  Rogue: 4,
  Adept: 2,
  Scholar: 2,
  Spellsword: 2,
  Artisan: 4,
});
skill.requireSkill('Educated');
skill.requireSkill('FirstAid');

export { skill };
