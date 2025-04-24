import { Skill } from '../skill.js';

const skill = new Skill('OneHandedBlunt');
skill.friendly('One Handed Blunt');
skill.category('Weapon');
skill.costs({ Fighter: 3, Scout: 4, Rogue: 4, Adept: 5, Scholar: 6, Spellsword: 5, Artisan: 5 });

export { skill };
