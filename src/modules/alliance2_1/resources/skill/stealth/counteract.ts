import { Skill } from '../skill.js';

const skill = new Skill('Counteract');
skill.friendly('Counteract');
skill.category('Stealth');
skill.costs({
  Fighter: 4,
  Scout: 3,
  Rogue: 2,
  Adept: 3,
  Scholar: 4,
  Spellsword: 4,
  Artisan: 4,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Stealth: 10 });

export { skill };
