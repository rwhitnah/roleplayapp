import { Skill } from '../skill.js';

const skill = new Skill('Slay');
skill.category('Martial');
skill.costs({
  Fighter: 2,
  Scout: 2,
  Rogue: 4,
  Adept: 4,
  Scholar: 4,
  Spellsword: 2,
  Artisan: 4,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Martial: 30 });

export { skill };
