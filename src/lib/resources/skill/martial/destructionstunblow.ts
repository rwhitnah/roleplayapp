import { Skill } from '../skill.js';

const skill = new Skill('DestructionStunBlow');
skill.friendly('Destruction/Stun Blow');
skill.category('Martial');
skill.costs({
  Fighter: 4,
  Scout: 5,
  Rogue: 6,
  Adept: 6,
  Scholar: 8,
  Spellsword: 5,
  Artisan: 8,
});

skill.allowsLimitlessRanks();
skill.grantsDaily();

skill.requireXPEach({ Martial: 45 });

export { skill };
