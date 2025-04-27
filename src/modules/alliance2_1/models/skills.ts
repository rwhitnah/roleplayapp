import { z } from "zod";
import { IdValidator } from "./common.js";

export const SkillCategoryValidator = z.enum(["Stealth", "Weapon", "Racial", "Martial", "Scholarly", "Trade"])

export type SkillCategory = z.infer<typeof SkillCategoryValidator>;

export const SkillNameValidator = z.enum([
    "Alchemy",
    "Archery",
    "Assassinate",
    "BackAttack",
    "Backstab",
    "Smithing",
    "BreakCommand",
    "BreakDisarmStrike",
    "Channeling",
    "HighMagic",
    "Claws",
    "CombinedStrike",
    "Counteract",
    "Tinkering",
    "Brewing",
    "Inscription",
    "CriticalAttack",
    "DestructionStunBlow",
    "DispellingStrike",
    "Dodge",
    "DoomBlow",
    "Educated",
    "EmpoweredStrike",
    "EnhancedMeditate",
    "EnhancedStrike",
    "Evade",
    "EvisceratingBlow",
    "FastRefit",
    "FearBerserkBlow",
    "Feint",
    "FirstAid",
    "FlexibleCasting",
    "Florentine",
    "FoundationStrike",
    "Hardy",
    "HealingArts",
    "ImprovedAssassinate",
    "ImprovedChanneling",
    "ImprovedSlay",
    "IndomitableWill",
    "Intercept",
    "MagisteriumStrike",
    "Merchant",
    "Mettle",
    "OneHandedBlunt",
    "OneHandedEdged",
    "OneHandedMaster",
    "OpportunisticAttack",
    "Parry",
    "Polearm",
    "PreciseBlow",
    "Profession",
    "PurifyingDrainingStrike",
    "RacialEvade",
    "RacialResolute",
    "ReadMagic",
    "RepelStrike",
    "ResistBinding",
    "ResistCommand",
    "ResistCurse",
    "ResistElement",
    "ResistNecromancy",
    "ResistPoison",
    "ResistSpell",
    "Resolute",
    "RipostingBlow",
    "ShatterDisarmStrike",
    "Shield",
    "SilenceStunBlow",
    "Slay",
    "SleepEnfeebleBlow",
    "SleepParalysisBlow",
    "SlowWeaknessBlow",
    "SmallWeapon",
    "Spark",
    "EarthSpellSlot1",
    "EarthSpellSlot2",
    "EarthSpellSlot3",
    "EarthSpellSlot4",
    "EarthSpellSlot5",
    "EarthSpellSlot6",
    "EarthSpellSlot7",
    "EarthSpellSlot8",
    "EarthSpellSlot9",
    "CelestialSpellSlot1",
    "CelestialSpellSlot2",
    "CelestialSpellSlot3",
    "CelestialSpellSlot4",
    "CelestialSpellSlot5",
    "CelestialSpellSlot6",
    "CelestialSpellSlot7",
    "CelestialSpellSlot8",
    "CelestialSpellSlot9",
    "Staff",
    "StyleMaster",
    "SurpriseAttack",
    "ThrownWeapon",
    "TwoHandedBlunt",
    "TwoHandedMaster",
    "TwoHandedSword",
    "TwoWeapons",
    "UnitedBlow",
    "WeaknessShunStrike",
    "WeaponMaster",
    "WeaponProficiency",
    "WearExtraArmor"
]);

export type SkillName = z.infer<typeof SkillNameValidator>;

export const ClassSkillCostValidator = z.object({ Fighter: z.number().int(), Scout: z.number().int(), Rogue: z.number().int(), Adept: z.number().int(), Scholar: z.number().int(), Spellsword: z.number().int(), Artisan: z.number().int() }).partial();

export type ClassSkillCost = z.infer<typeof ClassSkillCostValidator>;

export const CraftingCategoryValidator = z.enum(["Alchemy", "Brewing", "Inscription", "Smithing", "Tinkering"]);

export type CraftingCategory = z.infer<typeof CraftingCategoryValidator>;

export const CharacterSpellSchoolValidator = z.enum(['Earth', 'Celestial']);

export type CharacterSpellSchool = z.infer<typeof CharacterSpellSchoolValidator>;


export const SpellLevelValidator = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9)]);
export type SpellLevel = z.infer<typeof SpellLevelValidator>;

export const SpellSlotValidator = z.object({ spellLevel: SpellLevelValidator, school: CharacterSpellSchoolValidator.optional() });

export type SpellSlot = z.infer<typeof SpellSlotValidator>;

export const RequirementsPerEachValidator = z.object({
    Channeling: z.number().int(),
    CharacterLevel: z.number().int(),
    Blacksmith: z.number().int(),
}).partial();

export type RequirementsPerEach = z.infer<typeof RequirementsPerEachValidator>;

export const SkillTradeInValidator = z.object({
    skillName: SkillNameValidator,
    increasePerRank: z.number().int().optional(),
    tradeInNumber: z.number().int()
});

export type SkillTradeIn = z.infer<typeof SkillTradeInValidator>;

export const SkillCategoryXpRequirementValidator = z.object({
    Stealth: z.number().int(),
    Weapon: z.number().int(),
    Racial: z.number().int(),
    Martial: z.number().int(),
    Scholarly: z.number().int(),
    Trade: z.number().int(),
}).partial();

export type SkillCategoryXpRequirement = z.infer<typeof SkillCategoryXpRequirementValidator>;

export const RequirementAndOrValidator = z.object({ AND: SkillCategoryXpRequirementValidator, OR: SkillCategoryXpRequirementValidator }).partial();

export type RequirementAndOr = z.infer<typeof RequirementAndOrValidator>;

export const RequiredSkillValidator = z.union([SkillNameValidator, SpellSlotValidator]);

export type RequiredSkill = z.infer<typeof RequiredSkillValidator>;

export const SkillValidator = z.object({
    skillName: SkillNameValidator,
    friendlyName: z.string(),
    limitlessRanks: z.boolean(),
    skillCosts: z.union([ClassSkillCostValidator, z.array(ClassSkillCostValidator)]),
    skillCategory: SkillCategoryValidator,
    craftingCategory: CraftingCategoryValidator.optional(),
    secondarySchoolSkillCost: ClassSkillCostValidator.optional(),
    school: CharacterSpellSchoolValidator.optional(),
    spellLevel: SpellLevelValidator.optional(),
    skillXpRequirements: RequirementAndOrValidator.optional(),
    skillXpRequirementsEach: RequirementAndOrValidator.optional(),
    secondarySkillXpRequirements: RequirementAndOrValidator.optional(),
    requiredSkills: z.array(RequiredSkillValidator).optional(),
    dailyGrants: z.number().int().optional(),
    requireWeapon: z.boolean().optional(),
    separatePurchases: z.boolean().optional(),
    requirementPerEach: RequirementsPerEachValidator.optional(),
    skillTradeIn: SkillTradeInValidator.optional(),
    bonusBodyPointsPerRank: z.number().int().optional(),
    childrenSkills: z.array(SkillNameValidator).optional(),

});

export type SkillType = z.infer<typeof SkillValidator>;

export const CharacterSkillValidator = z.object({
    character_id: IdValidator,
    playerProvidedDescription: z.string().nullish(),
    ranks: z.number().int().positive(),
}).merge(SkillValidator);

export type CharacterSkill = z.infer<typeof CharacterSkillValidator>;