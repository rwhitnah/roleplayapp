import { Skill } from '../skill.js';

const skill = new Skill('Blacksmith');
skill.category('Martial');
skill.costs({ Fighter: 3, Scout: 3, Rogue: 3, Adept: 3, Scholar: 3, Spellsword: 3, Artisan: 3 });
skill.allowsLimitlessRanks();
skill.crafting('Smithing');

export { skill };
