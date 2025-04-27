import { type CharacterSpellSchool } from '../../../models/skills.js';
import { Skill } from '../skill.js';

function getChanneling(school: CharacterSpellSchool) {
  const skill = new Skill(`${school}Channeling`);
  skill.friendly(`${school} Channeling`)
  skill.category('Scholarly');
  skill.costs({
    Fighter: 6,
    Scout: 6,
    Rogue: 6,
    Adept: 4,
    Scholar: 3,
    Spellsword: 4,
    Artisan: 5,
  });
  skill.secondarySchoolCost({
    Fighter: 8,
    Scout: 8,
    Rogue: 8,
    Adept: 5,
    Scholar: 4,
    Spellsword: 5,
    Artisan: 6,
  });
  skill.school = school;
  skill.requireSkill(`${school}SpellSlot1`);
  skill.allowsLimitlessRanks();
  return skill;
}

const skills = [getChanneling('Celestial'), getChanneling('Earth')];
export { skills };
