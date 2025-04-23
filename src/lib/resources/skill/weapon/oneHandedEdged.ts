import { Skill } from '../skill.js';

const skill = new Skill('OneHandedEdged');
skill.friendly('One Handed Edged');
skill.category('Weapon');
skill.costs({ Fighter: 5, Scout: 5, Rogue: 5, Adept: 7, Scholar: 10, Spellsword: 7, Artisan: 7 });

export { skill };
