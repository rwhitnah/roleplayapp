import { Skill } from '../skill.js';

const skill = new Skill('Educated');
skill.friendly('Educated');
skill.category('Trade');
skill.costs({
  Fighter: 6,
  Scout: 6,
  Rogue: 6,
  Adept: 3,
  Scholar: 3,
  Spellsword: 3,
  Artisan: 3,
});

export { skill };
