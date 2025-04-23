import { Skill } from '../skill.js';

const skill = new Skill('ShatterDisarmStrike');
skill.friendly('Shatter Disarm Strike');
skill.category('Martial');
skill.costs({
  Fighter: 3,
  Scout: 4,
  Rogue: 5,
  Adept: 6,
  Scholar: 7,
  Spellsword: 4,
  Artisan: 7,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Martial: 20 });

export { skill };
