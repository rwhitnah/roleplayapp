import { Skill } from '../skill.js';

const skill = new Skill('FirstAid');
skill.friendly('First Aid');
skill.category('Scholarly');
skill.costs({
  Fighter: 2,
  Scout: 2,
  Rogue: 2,
  Adept: 2,
  Scholar: 2,
  Spellsword: 2,
  Artisan: 2,
});

export { skill };
