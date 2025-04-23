import { Skill } from '../skill.js';

const skill = new Skill('Alchemy');
skill.friendly('Alchemy');
skill.category('Stealth');
skill.costs({
  Fighter: 6,
  Scout: 5,
  Rogue: 3,
  Adept: 4,
  Scholar: 4,
  Spellsword: 6,
  Artisan: 3,
});

skill.allowsLimitlessRanks();

skill.requireSkill('HerbalLore');

skill.crafting('Alchemy');

export { skill };
