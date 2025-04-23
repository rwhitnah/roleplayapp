import { Skill } from '../skill.js';

const skill = new Skill('Parry');
skill.category('Martial');
skill.costs({
  Fighter: 4,
  Scout: 4,
  Rogue: 8,
  Adept: 8,
  Scholar: 8,
  Spellsword: 5,
  Artisan: 8,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();
skill.requireXPEach({ Martial: 30 });

export { skill };
