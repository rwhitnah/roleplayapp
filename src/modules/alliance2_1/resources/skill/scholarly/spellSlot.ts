import { type CharacterSpellSchool, type ClassSkillCost, type SpellLevel } from '../../../models/skills.js';
import { Skill } from '../skill.js';
const spellCostsByLevelPrimary: ClassSkillCost[] = [
  { Fighter: 3, Scout: 3, Rogue: 2, Adept: 1, Scholar: 1, Spellsword: 1, Artisan: 1 },
  { Fighter: 3, Scout: 3, Rogue: 2, Adept: 1, Scholar: 1, Spellsword: 1, Artisan: 2 },
  { Fighter: 6, Scout: 6, Rogue: 4, Adept: 2, Scholar: 2, Spellsword: 2, Artisan: 2 },
  { Fighter: 6, Scout: 6, Rogue: 4, Adept: 3, Scholar: 2, Spellsword: 3, Artisan: 3 },
  { Fighter: 9, Scout: 9, Rogue: 6, Adept: 3, Scholar: 3, Spellsword: 3, Artisan: 4 },
  { Fighter: 9, Scout: 9, Rogue: 6, Adept: 4, Scholar: 3, Spellsword: 4, Artisan: 4 },
  { Fighter: 12, Scout: 12, Rogue: 8, Adept: 5, Scholar: 4, Spellsword: 5, Artisan: 5 },
  { Fighter: 12, Scout: 12, Rogue: 8, Adept: 5, Scholar: 4, Spellsword: 5, Artisan: 6 },
  { Fighter: 15, Scout: 15, Rogue: 10, Adept: 6, Scholar: 5, Spellsword: 6, Artisan: 6 },
];

const spellCostsByLevelSecondary: ClassSkillCost[] = [
  { Fighter: 6, Scout: 6, Rogue: 4, Adept: 2, Scholar: 2, Spellsword: 2, Artisan: 2 },
  { Fighter: 6, Scout: 6, Rogue: 4, Adept: 2, Scholar: 2, Spellsword: 2, Artisan: 4 },
  { Fighter: 12, Scout: 12, Rogue: 8, Adept: 4, Scholar: 4, Spellsword: 4, Artisan: 4 },
  { Fighter: 12, Scout: 12, Rogue: 8, Adept: 6, Scholar: 4, Spellsword: 6, Artisan: 6 },
  { Fighter: 18, Scout: 18, Rogue: 12, Adept: 6, Scholar: 6, Spellsword: 6, Artisan: 8 },
  { Fighter: 18, Scout: 18, Rogue: 12, Adept: 8, Scholar: 6, Spellsword: 8, Artisan: 8 },
  { Fighter: 24, Scout: 24, Rogue: 16, Adept: 10, Scholar: 8, Spellsword: 10, Artisan: 10 },
  { Fighter: 24, Scout: 24, Rogue: 16, Adept: 10, Scholar: 8, Spellsword: 10, Artisan: 12 },
  { Fighter: 30, Scout: 30, Rogue: 20, Adept: 12, Scholar: 10, Spellsword: 12, Artisan: 12 },
];

const spellLevels: SpellLevel[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function createSpellSlot(school: CharacterSpellSchool, level: SpellLevel) {
  const skill = new Skill(`${school}SpellSlot${level}`);
  skill.friendly(`${school} Spell Slot - Level ${level} `)
  skill.setSpellSlot(level, school);
  skill.costs(spellCostsByLevelPrimary[level - 1])
  skill.secondarySchoolCost(spellCostsByLevelSecondary[level - 1]);
  skill.category('Scholarly');
  skill.grantsDaily();
  if (level === 1) {
    skill.requireSkill(school === 'Earth' ? 'HealingArts' : 'ReadMagic');
  } else {
    // @ts-ignore
    skill.requireSkill(`${school}SpellSlot${level-1}`);
  }
  return skill;
}

const earthSpells = spellLevels.map((level: SpellLevel) => createSpellSlot('Earth', level));
const celestialSpells = spellLevels.map((level: SpellLevel) => createSpellSlot('Celestial', level));

export { earthSpells, celestialSpells };
