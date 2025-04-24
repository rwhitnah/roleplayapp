import { Skill } from '../skill.js';

const skill = new Skill('Staff');
skill.category('Weapon');
skill.costs({ Fighter: 4, Scout: 4, Rogue: 4, Adept: 4, Scholar: 4, Spellsword: 4, Artisan: 4 });

export { skill };
