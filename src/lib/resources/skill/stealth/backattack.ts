import { Skill } from '../skill.js';

const skill = new Skill('BackAttack');
skill.friendly('Back Attack');
skill.category('Stealth');
skill.costs({
  Fighter: 5,
  Scout: 3,
  Rogue: 3,
  Adept: 3,
  Scholar: 7,
  Spellsword: 6,
  Artisan: 6,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();
skill.requiresWeapon();

export { skill };
