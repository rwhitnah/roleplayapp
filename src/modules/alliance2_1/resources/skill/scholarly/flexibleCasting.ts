import { Skill } from '../skill.js';

const skill = new Skill('FlexibleCasting');
skill.friendly('Flexible Casting');
skill.category('Scholarly');
skill.costs({
  Fighter: 5,
  Scout: 5,
  Rogue: 4,
  Adept: 3,
  Scholar: 2,
  Spellsword: 3,
  Artisan: 4,
});

// TODO: fix this
skill.requireSkill("EarthSpellSlot1");

export { skill };
