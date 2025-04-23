import { Skill } from '../skill.js';

const skill = new Skill('ImprovedChanneling');
skill.friendly('Improved Channeling');
skill.category('Scholarly');
skill.costs({
  Fighter: 10,
  Scout: 10,
  Rogue: 10,
  Adept: 6,
  Scholar: 5,
  Spellsword: 6,
  Artisan: 6,
});

skill.requirePerEachRank({ Channeling: 20 });

export { skill };
