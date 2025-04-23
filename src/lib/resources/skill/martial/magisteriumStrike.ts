import { Skill } from '../skill.js';

const skill = new Skill('MagisteriumStrike');
skill.friendly('Magisterium Strike');
skill.category('Martial');
skill.costs({
  Fighter: 4,
  Scout: 4,
  Rogue: 4,
  Adept: 3,
  Scholar: 3,
  Spellsword: 2,
  Artisan: 3,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();
skill.requireXPEach({ Martial: 10 });
skill.requireSkill('HealingArts');

export { skill };
