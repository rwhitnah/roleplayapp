import { Skill } from '../skill.js';

const skill = new Skill('Dodge');
skill.friendly('Dodge');
skill.category('Stealth');
skill.costs({
  Fighter: 8,
  Scout: 6,
  Rogue: 5,
  Adept: 6,
  Scholar: 8,
  Spellsword: 8,
  Artisan: 8,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Stealth: 30 });

export { skill };
