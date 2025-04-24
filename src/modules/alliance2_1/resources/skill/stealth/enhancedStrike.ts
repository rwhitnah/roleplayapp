import { Skill } from '../skill.js';

const skill = new Skill('EnhancedStrike');
skill.friendly('Enhanced Strike');
skill.category('Stealth');
skill.costs({
  Fighter: 6,
  Scout: 6,
  Rogue: 5,
  Adept: 3,
  Scholar: 4,
  Spellsword: 4,
  Artisan: 4,
});
skill.allowsLimitlessRanks();
skill.grantsDaily();
skill.requireSkill({ spellLevel: 3 });
skill.requireXPEach({ Stealth: 20 });

export { skill };
