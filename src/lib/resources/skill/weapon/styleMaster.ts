import { Skill } from '../skill.js';

const skill = new Skill('StyleMaster');
skill.friendly('Style Master');
skill.category('Weapon');
skill.costs({ Fighter: 10, Scout: 15, Rogue: 15, Adept: 15, Scholar: 20, Spellsword: 15, Artisan: 15 });
skill.children(['Florentine', 'TwoWeapons', 'Shield']);

export { skill };
