import { Skill } from '../skill.js';

const skill = new Skill('WearExtraArmor');
skill.friendly('Wear Extra Armor');
skill.category('Martial');
skill.costs({
  Fighter: 1,
  Scout: 1,
  Rogue: 1,
  Adept: 1,
  Scholar: 1,
  Spellsword: 1,
  Artisan: 1,
});

skill.allowsLimitlessRanks();
export { skill };
