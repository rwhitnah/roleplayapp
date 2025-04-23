import { Skill } from '../skill.js';

const skill = new Skill('SurpriseAttack');
skill.friendly('Surprise Attack');
skill.category('Stealth');
skill.costs({ Fighter: 8, Scout: 7, Rogue: 6, Adept: 7, Scholar: 9, Spellsword: 8, Artisan: 8 });
skill.requireXP({ Stealth: 90 });

export { skill };
