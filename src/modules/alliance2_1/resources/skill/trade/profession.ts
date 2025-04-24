import { Skill } from '../skill.js';

const skill = new Skill('Profession');
skill.friendly('Profession');
skill.category('Trade');
skill.costs({
  Fighter: 2,
  Scout: 2,
  Rogue: 2,
  Adept: 2,
  Scholar: 2,
  Spellsword: 2,
  Artisan: 2,
});

skill.allowsLimitlessRanks();
skill.allowSeparatePurchases();

export { skill };
