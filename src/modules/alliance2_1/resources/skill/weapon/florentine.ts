import { Skill } from '../skill.js';

const skill = new Skill('Florentine');
skill.category('Weapon');
skill.costs({ Fighter: 4, Scout: 6, Rogue: 6, Adept: 8, Scholar: 12, Spellsword: 8, Artisan: 8 });
skill.requiresWeapon();

export { skill };
