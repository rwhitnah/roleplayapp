import { Skill } from '../skill.js';

const skill = new Skill('FastRefit');
skill.friendly('Fast Refit');
skill.category('Martial');
skill.costs({
  Fighter: 2,
  Scout: 3,
  Rogue: 4,
  Adept: 5,
  Scholar: 6,
  Spellsword: 3,
  Artisan: 2,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requirePerEachRank({ Blacksmith: 1 });

export { skill };
