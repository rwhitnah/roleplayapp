import { Skill } from '../skill.js';

const skill = new Skill('CriticalAttack');
skill.friendly('Critical Attack');
skill.category('Martial');
skill.costs({
  Fighter: 3,
  Scout: 3,
  Rogue: 5,
  Adept: 6,
  Scholar: 7,
  Spellsword: 3,
  Artisan: 6,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();
skill.requiresWeapon();

export { skill };
