import type { Character, Prisma } from "../../../../../generated/prisma/index.js";
import { type SkillCategoryXpRequirement, type CharacterSpellSchool, type ClassSkillCost, type CraftingCategory, type RequiredSkill, type RequirementAndOr, type RequirementsPerEach, type SkillCategory, type SkillName, type SkillTradeIn, type SkillType, type SpellLevel } from "../../models/skills.js"
import { racesMap } from "../race/index.js";
import type { Race } from "../race/race.js";
import { allSkills } from "./index.js";

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

  costForCharacterAtRank(character: Prisma.CharacterGetPayload<{include: {skill: true}}>, ranks?: number) {
    if (!ranks) {
      ranks = character.skill.find((s) => s.name === this.skillName)?.ranks || 0
    }

    if (character.raceName && character.characterClass) {
      // @ts-ignore
      const race: Race = racesMap[character.raceName]
      if (race.skillCostMultiplier) {
        for (const multiplier of race.skillCostMultiplier) {
          if (multiplier.skillName === this.skillName) {
            // @ts-ignore
            if (Array.isArray(this.skillCosts)) {
              if (ranks > this.skillCosts.length) {
                return 100000000000000000
              } else {
                // @ts-ignore
                return this.skillCosts[ranks][character.characterClass] * multiplier.value 
              }
            } else {
              // @ts-ignore
              return this.skillCosts[character.characterClass] * multiplier.value
            }
          }
        }  
      }
      if (race.skillCostAdjustment) {
        for (const adjustment of race.skillCostAdjustment) {
          if (adjustment.skillName === this.skillName) {
            // @ts-ignore
            if (Array.isArray(this.skillCosts)) {
              if (ranks > this.skillCosts.length) {
                return 100000000000000000
              } else {
                // @ts-ignore
                return this.skillCosts[ranks][character.characterClass] + adjustment.value
              }
            } else {
              // @ts-ignore
              return this.skillCosts[character.characterClass] + adjustment.value
            }
          }
        }
      }


      if (this.skillCategory === "Racial") {
        let allowed = false
        if (race.racialSkills) {
          for (const skill of race.racialSkills) {
            if (skill == this.skillName) {
              allowed = true;
            }
          }
        }

        if (!allowed) {
          return 100000000000000000
        }
      }

      if (race.restrictedSkills) {
        for (const skill of race.restrictedSkills) {
          if (skill == this.skillName) {
            return 100000000000000000
          }
        }
      }
    }
    
    if (Array.isArray(this.skillCosts)) {
      if (ranks > this.skillCosts.length) {
        return 100000000000000000
      } else {
        // @ts-ignore
        return this.skillCosts[ranks][character.characterClass]
      }
    } else {
      // @ts-ignore
      return this.skillCosts[character.characterClass]
    }
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

  canBuyForCharacter(character: Prisma.CharacterGetPayload<{include: {skill: true}}>) {
    // TODO: make this not run on every skill
    const xpBySkillCategory: any = {}
    const costForNextRank = this.costForCharacterAtRank(character)
    let ranks = character.skill.find((s) => s.name === this.skillName)?.ranks;

    if (!this.limitlessRanks && ranks && ranks > 0 && !Array.isArray(this.skillCosts)) {
      return false
    }
    
    const spentXP = character.skill.reduce((sum,s) => {
      const t = allSkills.find((v) => v.skillName === s.name)
      let cost = 0
      for (let i=0; i < s.ranks; i++) {
        if (t) {
          cost += t.costForCharacterAtRank(character, i)
        }
      }

      if (t && t.skillCategory) {
        if (xpBySkillCategory[t.skillCategory]) {
          xpBySkillCategory[t.skillCategory] += cost
        } else {
          xpBySkillCategory[t.skillCategory] = cost
        }
      }
 
      return sum + cost 
    },0)

    // TODO switch to total xp once xp earning is in
    // @ts-ignore
    if ((Number(character.startingXp) - spentXP) > costForNextRank) {
      if (this.requiredSkills) {
        for (const skill of this.requiredSkills) {
          const t = character.skill.find((v) => v.name === skill)
          if (!t) {
            return false
          }
        }
      }

      if (this.requireWeapon) {
        let weapon = false
        for (const skill of character.skill) {
          const t = allSkills.find((v) => v.skillName === skill.name)
          if (t && t.skillCategory === 'Weapon') {
            weapon = true
          }

          if (t && t.skillName === "Claws") {
            weapon  = true
          }
        }
        if (!weapon) {
          return false
        }
      }

      if (this.skillXpRequirements.AND) {
        let failed = false;
        for (const key of Object.keys(this.skillXpRequirements.AND)) {
          // @ts-ignore
          if (this.skillXpRequirements[key] && this.skillXpRequirements.AND[key] > 0) {
            // @ts-ignore
            if (xpBySkillCategory[key] && xpBySkillCategory[key] < this.skillXpRequirements.AND[key]) {
              failed = true
            }
          }
        }
        if (!failed) {
          return false
        }
      }

      if (this.skillXpRequirements.OR) {
        let passed = false
        for (const key of Object.keys(this.skillXpRequirements.OR)) {
          // @ts-ignore
          if (this.skillXpRequirements[key] && this.skillXpRequirements.OR[key] > 0) {
            // @ts-ignore
            if (xpBySkillCategory[key] || xpBySkillCategory[key] > this.skillXpRequirements.OR[key] * (ranks + 1)) {
              passed = true
            }
          }
        }
        if (!passed) {
          return false
        }
      }

      if (this.skillXpRequirementsEach.AND) {
        let failed = false;
        for (const key of Object.keys(this.skillXpRequirementsEach.AND)) {
          // @ts-ignore
          if (this.skillXpRequirementsEach[key] && this.skillXpRequirementsEach.AND[key] > 0) {
            // @ts-ignore
            if (xpBySkillCategory[key] && xpBySkillCategory[key] < this.skillXpRequirementsEach.AND[key] * (ranks + 1)) {
              failed = true
            }
          }
        }
        if (!failed) {
          return false
        }
      }

      if (this.skillXpRequirementsEach.OR) {
        let passed = false
        for (const key of Object.keys(this.skillXpRequirementsEach.OR)) {
          // @ts-ignore
          if (this.skillXpRequirementsEach[key] && this.skillXpRequirementsEach.OR[key] > 0) {
            // @ts-ignore
            if (xpBySkillCategory[key] || xpBySkillCategory[key] > this.skillXpRequirementsEach.OR[key]) {
              passed = true
            }
          }
        }
        if (!passed) {
          return false
        }
      }
      return true
    }
    return false;
  }
}

