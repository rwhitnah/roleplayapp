import { Skill } from '../skill.js';

const skill = new Skill('Brewing');
skill.friendly('Brewing');
skill.category('Scholarly');
skill.costs({ Fighter: 6, Scout: 6, Rogue: 6, Adept: 4, Scholar: 3, Spellsword: 4, Artisan: 3 });
skill.allowsLimitlessRanks();
skill.crafting('Brewing');
skill.requireSkill('EarthSpellSlot1');
export { skill };
