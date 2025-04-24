import { Skill } from '../skill.js';

const skill = new Skill('SlowWeaknessBlow');
skill.friendly('Slow/Weakness Blow');
skill.category('Stealth');
skill.costs({ Fighter: 5, Scout: 5, Rogue: 3, Adept: 4, Scholar: 6, Artisan: 5 });
skill.requireXPEach({ Stealth: 20 });
skill.allowsLimitlessRanks();
skill.grantsDaily();

export { skill };
