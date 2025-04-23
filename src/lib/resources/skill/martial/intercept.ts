import { Skill } from '../skill.js';

const skill = new Skill('Intercept');
skill.category('Martial');
skill.costs({
  Fighter: 2,
  Scout: 2,
  Rogue: 3,
  Adept: 4,
  Scholar: 4,
  Spellsword: 2,
  Artisan: 4,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();
skill.requireXPEach({ Martial: 10 });

export { skill };
