import { Skill } from '../skill.js';

const skill = new Skill('Backstab');
skill.friendly('Backstab');
skill.category('Stealth');
skill.costs({
  Fighter: 6,
  Scout: 6,
  Rogue: 3,
  Adept: 6,
  Scholar: 8,
  Spellsword: 6,
  Artisan: 6,
});

skill.allowsLimitlessRanks();
skill.requiresWeapon()
skill.tradeIn({
  skillName: 'BackAttack',
  tradeInNumber: 2,
  increasePerRank: 1,
});

export { skill };
