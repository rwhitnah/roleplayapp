import { Skill } from '../skill.js';

const skill = new Skill('RipostingBlow');
skill.friendly('Riposting Blow');
skill.category('Martial');
skill.costs({
  Fighter: 4,
  Scout: 4,
  Rogue: 4,
  Adept: 5,
  Scholar: 8,
  Spellsword: 5,
  Artisan: 8,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();
skill.requireEitherOrXPEach({ Martial: 60, Stealth: 60 });

export { skill };
