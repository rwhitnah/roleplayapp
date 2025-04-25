import { type RaceName, type RaceSkillModifier, type RaceType } from "../../models/character.js";
import { type SkillName } from "../../models/skills.js";

export class Race implements RaceType {
  name: RaceName;
  racialSkills: SkillName[];
  skillCostMultiplier: RaceSkillModifier[];
  skillCostAdjustment: RaceSkillModifier[];
  restrictedSkills: SkillName[];
  requiredSkillsPerCharacterLevel: SkillName[];
  wildcardSkills?: number | null;

  constructor(name: RaceName) {
    this.name = name;
    this.racialSkills = [];
    this.skillCostMultiplier = [];
    this.skillCostAdjustment = [];
    this.restrictedSkills = [];
    this.requiredSkillsPerCharacterLevel = [];
  }

  setWildcards(numberOfSkills: number) {
    this.wildcardSkills = numberOfSkills;
  }

  addSkill(skill: SkillName) {
    this.racialSkills.push(skill);
  }

  skillMultiplier(multiplier: RaceSkillModifier) {
    this.skillCostMultiplier.push(multiplier);
  }

  skillAdjustment(adjustment: RaceSkillModifier) {
    this.skillCostAdjustment.push(adjustment);
  }

  restrictSkill(skill: SkillName) {
    this.restrictedSkills.push(skill);
  }

  requireSkillPerCharacterLevel(skill: SkillName) {
    this.requiredSkillsPerCharacterLevel.push(skill);
  }
}
