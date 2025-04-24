import { Skill } from '../skill.js';

const skill = new Skill('Evade');
skill.category('Stealth');
skill.costs({ Fighter: 5, Scout: 4, Rogue: 3, Adept: 4, Scholar: 6, Spellsword: 5, Artisan: 5 });
skill.requireXPEach({ Stealth: 20 });
skill.allowsLimitlessRanks();
skill.grantsDaily();

export { skill };
