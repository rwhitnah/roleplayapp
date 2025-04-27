import { Skill } from '../skill.js';

const skill = new Skill('WeaponProficiency');
skill.friendly('Weapon Proficiency');
skill.category('Martial');
skill.costs({
  Fighter: 3,
  Scout: 6,
  Rogue: 6,
  Adept: 6,
  Scholar: 8,
  Spellsword: 6,
  Artisan: 6,
});

skill.allowsLimitlessRanks();
skill.requiresWeapon();
skill.tradeIn({
  skillName: 'CriticalAttack',
  tradeInNumber: 2,
  increasePerRank: 1,
});

export { skill };
