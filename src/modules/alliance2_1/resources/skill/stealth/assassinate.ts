import { Skill } from '../skill.js';

const skill = new Skill('Assassinate');
skill.friendly('Assassinate');
skill.category('Stealth');
skill.costs({
  Fighter: 4,
  Scout: 1,
  Rogue: 1,
  Adept: 2,
  Scholar: 4,
  Spellsword: 4,
  Artisan: 4,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Stealth: 30 });

export { skill };
