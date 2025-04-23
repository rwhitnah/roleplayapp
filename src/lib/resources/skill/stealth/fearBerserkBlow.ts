import { Skill } from '../skill.js';

const skill = new Skill('FearBerserkBlow');
skill.friendly('Fear/Berserk Blow');
skill.category('Stealth');
skill.costs({ Fighter: 7, Scout: 5, Rogue: 5, Adept: 5, Scholar: 8, Spellsword: 7, Artisan: 7 });
skill.requireXPEach({ Stealth: 45 });
skill.allowsLimitlessRanks();
skill.grantsDaily();

export { skill };
