import { Skill } from '../skill.js';

const skill = new Skill('EvisceratingBlow');
skill.friendly('Eviscerating Blow');
skill.category('Martial');
skill.costs({
  Fighter: 5,
  Scout: 7,
  Rogue: 14,
  Adept: 14,
  Scholar: 14,
  Spellsword: 7,
  Artisan: 14,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Martial: 60 });

export { skill };
