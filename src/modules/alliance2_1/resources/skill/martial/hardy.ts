import { Skill } from '../skill.js';

const skill = new Skill('Hardy');
skill.category('Martial');
skill.costs({
  Fighter: 5,
  Scout: 6,
  Rogue: 6,
  Adept: 6,
  Scholar: 7,
  Spellsword: 6,
  Artisan: 6,
});
skill.bonusBody(5);
skill.allowsLimitlessRanks();
skill.requirePerEachRank({ CharacterLevel: 1 });

export { skill };
