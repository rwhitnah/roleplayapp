import { Skill } from '../skill.js';

const skill = new Skill('Spark');
skill.friendly('Spark');
skill.category('Scholarly');
skill.costs({
  Fighter: 6,
  Scout: 6,
  Rogue: 6,
  Adept: 4,
  Scholar: 3,
  Spellsword: 4,
  Artisan: 5,
});

skill.requireXP({ Scholarly: 15 });

export { skill };
