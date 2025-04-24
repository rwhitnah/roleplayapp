import { Skill } from '../skill.js';

const skill = new Skill('WeaponMaster');
skill.friendly('Weapon Master');
skill.category('Weapon');
skill.costs({ Fighter: 15, Scout: 20, Rogue: 20, Adept: 20, Scholar: 20, Spellsword: 20, Artisan: 20 });
skill.children(['OneHandedBlunt', 'OneHandedEdged', 'OneHandedMaster', 'TwoHandedBlunt', 'TwoHandedSword', 'TwoHandedMaster', 'SmallWeapon', 'Staff', 'Polearm']);

export { skill };
