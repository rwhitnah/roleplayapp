import { Skill } from '../skill.js';

const skill = new Skill('PreciseBlow');
skill.friendly('Precise Blow');
skill.category('Martial');
skill.costs({
  Fighter: 3,
  Scout: 3,
  Rogue: 4,
  Adept: 4,
  Scholar: 5,
  Spellsword: 3,
  Artisan: 5,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Martial: 20 });

export { skill };
