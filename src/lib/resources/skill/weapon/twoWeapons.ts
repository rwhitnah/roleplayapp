import { Skill } from '../skill.js';

const skill = new Skill('TwoWeapons');
skill.friendly('Two Weapons');
skill.category('Weapon');
skill.costs({ Fighter: 2, Scout: 4, Rogue: 4, Adept: 4, Scholar: 4, Spellsword: 4, Artisan: 4 });
skill.requireSkill('Florentine');

export { skill };
