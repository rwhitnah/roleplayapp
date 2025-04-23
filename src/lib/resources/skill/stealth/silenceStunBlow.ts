import { Skill } from '../skill.js';

const skill = new Skill('SilenceStunBlow');
skill.friendly('Silence/Stun Blow');
skill.category('Stealth');
skill.costs({ Fighter: 6, Scout: 5, Rogue: 4, Adept: 5, Scholar: 7, Spellsword: 6, Artisan: 6 });
skill.requireXPEach({ Stealth: 30 });
skill.allowsLimitlessRanks();
skill.grantsDaily();

export { skill };
