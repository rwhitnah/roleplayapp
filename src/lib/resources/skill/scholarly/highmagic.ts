import { type CharacterSpellSchool } from '../../../models/skills.js';
import { Skill } from '../skill.js';

function getHighMagic(school: CharacterSpellSchool) {
  const skill = new Skill('HighMagic');
  skill.friendly('High Magic');
  skill.category('Scholarly');
  skill.costs({
    Fighter: 4,
    Scout: 4,
    Rogue: 4,
    Adept: 3,
    Scholar: 2,
    Spellsword: 3,
    Artisan: 3,
  });
  skill.secondarySchoolCost({
    Fighter: 8,
    Scout: 8,
    Rogue: 8,
    Adept: 6,
    Scholar: 4,
    Spellsword: 6,
    Artisan: 6,
  });
  skill.requireXP({ Scholarly: 75 });
  skill.secondaryRequireXp({ Scholarly: 150 });
  skill.requireSkill({ spellLevel: 1, school });
  return skill;
}
const skills = [getHighMagic('Celestial'), getHighMagic('Earth')];
export { skills };
