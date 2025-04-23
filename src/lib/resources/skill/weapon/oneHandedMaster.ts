import { Skill } from '../skill.js';

const skill = new Skill('OneHandedMaster');
skill.friendly('One Handed Master');
skill.category('Weapon');
skill.costs({ Fighter: 7, Scout: 8, Rogue: 8, Adept: 10, Scholar: 14, Spellsword: 10, Artisan: 10 });
skill.children(['OneHandedBlunt', 'OneHandedEdged', 'SmallWeapon']);

export { skill };
