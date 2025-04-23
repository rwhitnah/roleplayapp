import { Skill } from '../skill.js';

const skill = new Skill('UnitedBlow');
skill.friendly('United Blow');
skill.category('Stealth');
skill.costs({ Fighter: 15, Scout: 15, Rogue: 15, Adept: 10, Scholar: 12, Spellsword: 12, Artisan: 12 });
skill.requireXP({ Scholarly: 75 });
skill.requireXP({ Stealth: 60 });

export { skill };
