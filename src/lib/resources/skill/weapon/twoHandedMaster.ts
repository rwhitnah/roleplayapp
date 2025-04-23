import { Skill } from '../skill.js';

const skill = new Skill('TwoHandedMaster');
skill.friendly('Two Handed Master');
skill.category('Weapon');
skill.costs({ Fighter: 10, Scout: 16, Rogue: 16, Adept: 16, Scholar: 20, Spellsword: 16, Artisan: 16 });
skill.children(['Polearm', 'TwoHandedBlunt', 'TwoHandedSword', 'Staff']);

export { skill };
