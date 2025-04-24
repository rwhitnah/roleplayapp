import { Skill } from '../skill.js';

const skill = new Skill('DoomBlow');
skill.friendly('Doom Blow');
skill.category('Stealth');
skill.costs({
  Fighter: 12,
  Scout: 6,
  Rogue: 5,
  Adept: 3,
  Scholar: 12,
  Spellsword: 12,
  Artisan: 12,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Stealth: 60 });

export { skill };
