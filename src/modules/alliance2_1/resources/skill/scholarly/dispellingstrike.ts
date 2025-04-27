import { Skill } from '../skill.js';

const skill = new Skill('DispellingStrike');
skill.friendly('Dispelling Strike');
skill.category('Scholarly');
skill.costs({
  Fighter: 7,
  Scout: 7,
  Rogue: 7,
  Adept: 3,
  Scholar: 4,
  Spellsword: 3,
  Artisan: 4,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireSkill("CelestialSpellSlot7");
skill.requireEitherOrXPEach({ Stealth: 30, Martial: 30 });

export { skill };
