import { type SkillCategoryXpRequirement, type CharacterSpellSchool, type ClassSkillCost, type CraftingCategory, type RequiredSkill, type RequirementAndOr, type RequirementsPerEach, type SkillCategory, type SkillName, type SkillTradeIn, type SkillType, type SpellLevel } from "../../models/skills.js"

export class Skill implements Partial<SkillType> {
  skillName: SkillName;
  friendlyName: string;
  limitlessRanks: boolean;
  skillCosts?: ClassSkillCost | ClassSkillCost[];
  skillCategory?: SkillCategory;
  secondarySchoolSkillCost?: ClassSkillCost;
  school?: CharacterSpellSchool;
  spellLevel?: SpellLevel;
  skillXpRequirements: RequirementAndOr;
  skillXpRequirementsEach: RequirementAndOr;
  requiredSkills: RequiredSkill[];
  craftingCategory?: CraftingCategory;
  dailyGrants?: number;
  requireWeapon?: boolean;
  separatePurchases?: boolean;
  requirementPerEach?: RequirementsPerEach;
  skillTradeIn?: SkillTradeIn;
  bonusBodyPointsPerRank?: number;
  childrenSkills?: SkillName[];
  secondarySkillXpRequirements: RequirementAndOr;

  constructor(skillName: SkillName) {
    this.skillName = skillName;
    this.friendlyName = skillName;
    this.limitlessRanks = false;
    this.requiredSkills = [];
    this.skillXpRequirements = {};
    this.skillXpRequirementsEach = {};
    this.secondarySkillXpRequirements = {};
  }

  toJson() {
    return JSON.parse(JSON.stringify(this)) as SkillType;
  }

  friendly(friendly: string) {
    this.friendlyName = friendly;
  }

  category(groupName: SkillCategory) {
    this.skillCategory = groupName;
  }

  children(childern: SkillName[]) {
    this.childrenSkills = childern;
  }

  costs(costs: ClassSkillCost | ClassSkillCost[]) {
    this.skillCosts = costs;
  }

  secondarySchoolCost(cost: ClassSkillCost) {
    this.secondarySchoolSkillCost = cost;
  }

  allowsLimitlessRanks() {
    this.limitlessRanks = true;
  }

  tradeIn(tradeIn: SkillTradeIn) {
    this.skillTradeIn = tradeIn;
  }

  requireSkill(skillIdentifier: RequiredSkill) {
    this.requiredSkills.push(skillIdentifier);
  }

  requireEitherOrXP(require: SkillCategoryXpRequirement) {
    this.skillXpRequirements.OR = require;
  }

  requireXP(require: SkillCategoryXpRequirement) {
    this.skillXpRequirements.AND = require;
  }

  secondaryRequireXp(require: SkillCategoryXpRequirement) {
    this.secondarySkillXpRequirements.AND = require;
  }

  requireEitherOrXPEach(require: SkillCategoryXpRequirement) {
    this.skillXpRequirementsEach.OR = require;
  }
  requireXPEach(require: SkillCategoryXpRequirement) {
    this.skillXpRequirementsEach.AND = require;
  }
  requirePerEachRank(requirementPerEach: RequirementsPerEach) {
    this.requirementPerEach = requirementPerEach;
  }

  crafting(craftingName: CraftingCategory) {
    this.craftingCategory = craftingName;
  }

  grantsDaily(times = 1) {
    this.dailyGrants = times;
    this.allowsLimitlessRanks();
  }

  requiresWeapon() {
    this.requireWeapon = true;
  }

  allowSeparatePurchases() {
    this.separatePurchases = true;
  }

  bonusBody(bonus = 1) {
    this.bonusBodyPointsPerRank = bonus;
  }

  setSpellSlot(level: SpellLevel, school: CharacterSpellSchool) {
    this.spellLevel = level;
    this.school = school;
    this.friendlyName = `${this.school} Level ${this.spellLevel}`;
  }

  isSpellSlot() {
    return this.spellLevel && this.school;
  }

  isSpellSchoolBased() {
    return !!this.school;
  }

  rubySkillName() {
    if (this.isSpellSlot()) {
      return `Skills::${this.school!}::Level${this.spellLevel!}`;
    }
    if (this.isSpellSchoolBased()) {
      return `Skills::${this.school!}::${this.skillName}`;
    }
    return `Skills::${this.skillName}`;
  }

}

