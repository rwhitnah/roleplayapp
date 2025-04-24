import { Skill } from '../skill.js';

const skill = new Skill('TwoHandedBlunt');
skill.friendly('Two Handed Blunt');
skill.category('Weapon');
skill.costs({ Fighter: 6, Scout: 8, Rogue: 8, Adept: 8, Scholar: 12, Spellsword: 8, Artisan: 8 });

export { skill };
