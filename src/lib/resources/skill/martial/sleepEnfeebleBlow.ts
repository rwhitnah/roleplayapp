import { Skill } from '../skill.js';

const skill = new Skill('SleepEnfeebleBlow');
skill.friendly('Sleep/Enfeeble Blow');
skill.category('Martial');
skill.costs({
  Fighter: 4,
  Scout: 5,
  Rogue: 6,
  Adept: 7,
  Scholar: 7,
  Spellsword: 5,
  Artisan: 7,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Martial: 45 });

export { skill };
