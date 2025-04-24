import { Skill } from '../skill.js';

const skill = new Skill('Claws');
skill.friendly('Claws');
skill.category('Racial');
skill.costs({
  Fighter: 8,
  Scout: 8,
  Rogue: 8,
  Adept: 8,
  Scholar: 8,
  Spellsword: 8,
  Artisan: 8,
});

export { skill };
