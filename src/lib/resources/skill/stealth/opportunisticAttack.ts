import { Skill } from '../skill.js';

const skill = new Skill('OpportunisticAttack');
skill.friendly('Opportunistic Attack');
skill.category('Stealth');
skill.costs({ Fighter: 4, Scout: 2, Rogue: 2, Adept: 2, Scholar: 5, Spellsword: 4, Artisan: 4 });
skill.requireXPEach({ Stealth: 60 });
skill.allowsLimitlessRanks();
skill.grantsDaily();

export { skill };
