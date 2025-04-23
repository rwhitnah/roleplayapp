import { Skill } from '../skill.js';

const skill = new Skill('EmpoweredStrike');
skill.friendly('Empowered Strike');
skill.category('Martial');
skill.costs({
  Fighter: 5,
  Scout: 5,
  Rogue: 5,
  Adept: 4,
  Scholar: 4,
  Spellsword: 3,
  Artisan: 4,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Martial: 20 });
skill.requireSkill({ spellLevel: 3 });

export { skill };
