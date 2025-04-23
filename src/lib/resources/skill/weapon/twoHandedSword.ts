import { Skill } from '../skill.js';

const skill = new Skill('TwoHandedSword');
skill.friendly('Two Handed Sword');
skill.category('Weapon');
skill.costs({ Fighter: 8, Scout: 12, Rogue: 12, Adept: 12, Scholar: 16, Spellsword: 12, Artisan: 12 });

export { skill };
