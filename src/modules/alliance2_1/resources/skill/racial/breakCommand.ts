import { Skill } from '../skill.js';

const skill = new Skill('BreakCommand');
skill.friendly('Break Command');
skill.category('Racial');
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

export { skill };
