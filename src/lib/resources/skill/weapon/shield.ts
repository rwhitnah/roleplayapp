import { Skill } from '../skill.js';

const skill = new Skill('Shield');
skill.category('Weapon');
skill.costs({ Fighter: 6, Scout: 10, Rogue: 10, Adept: 10, Scholar: 12, Spellsword: 10, Artisan: 10 });

export { skill };
