import { Skill } from '../skill.js';

const skill = new Skill('PurifyingDrainingStrike');
skill.friendly('Purifying/Draining Strike');
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
skill.requireEitherOrXP({ Martial: 30, Stealth: 30 });
skill.requireSkill({ spellLevel: 7, school: 'Earth' });

export { skill };
