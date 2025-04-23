import { Skill } from '../skill.js';

const skill = new Skill('SleepParalysisBlow');
skill.friendly('Sleep/Paralysis Blow');
skill.category('Stealth');
skill.costs({ Fighter: 5, Scout: 3, Rogue: 2, Adept: 3, Scholar: 6, Spellsword: 5, Artisan: 5 });
skill.requireXPEach({ Stealth: 15 });
skill.allowsLimitlessRanks();
skill.grantsDaily();

export { skill };
