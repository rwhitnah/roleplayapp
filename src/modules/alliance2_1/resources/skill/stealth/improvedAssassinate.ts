import { Skill } from '../skill.js';

const skill = new Skill('ImprovedAssassinate');
skill.friendly('Improved Assassinate');
skill.category('Stealth');
skill.costs({ Fighter: 4, Scout: 2, Rogue: 2, Adept: 2, Scholar: 4, Spellsword: 4, Artisan: 4 });
skill.requireXPEach({ Stealth: 30 });

export { skill };