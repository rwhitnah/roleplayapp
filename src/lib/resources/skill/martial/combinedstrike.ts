import { Skill } from '../skill.js';

const skill = new Skill('CombinedStrike');
skill.friendly('Combined Strike');
skill.category('Martial');
skill.costs({
  Fighter: 15,
  Scout: 15,
  Rogue: 15,
  Adept: 12,
  Scholar: 12,
  Spellsword: 10,
  Artisan: 12,
});

skill.requireXP({ Martial: 60 });
skill.requireXP({ Scholarly: 75 });

export { skill };
