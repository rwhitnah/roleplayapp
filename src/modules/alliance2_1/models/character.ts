import { z } from "zod";
import { IdValidator, WithIdValidator } from "./common.js";
import { CharacterSpellSchoolValidator, SkillCategoryValidator, SkillNameValidator } from "./skills.js";

export const ClassNameValidator = z.enum(['Fighter', 'Scout', 'Rogue', 'Adept', 'Scholar', 'Spellsword', 'Artisan']);

export type ClassName = z.infer<typeof ClassNameValidator>;

export const ClassValidator = z.object({ name: ClassNameValidator, maxArmor: z.number().int(), xpPerBody: z.number().int() });

export type ClassType = z.infer<typeof ClassValidator>;

export const RaceNameValidator = z.enum([
    "Biata",
    "Dryad",
    "Dwarf",
    "Elf",
    "Hobling",
    "Human",
    "Selunari",
    "Sylvanborn",
    "Oathsworn",
    "Stone Elf",
    "Dark Elf",
    "High Ogre",
    "High Orc",
    "Wylderkin"
]);

export type RaceName = z.infer<typeof RaceNameValidator>;

export const RaceSkillModifierValidator = z.object({
    skillName: SkillNameValidator.optional(),
    value: z.number().int(),
    skillCategory: SkillCategoryValidator.optional()
});

export type RaceSkillModifier = z.infer<typeof RaceSkillModifierValidator>;

export const RaceValidator = z.object({
    name: RaceNameValidator,
    racialSkills: z.array(SkillNameValidator),
    skillCostMultiplier: z.array(RaceSkillModifierValidator),
    skillCostAdjustment: z.array(RaceSkillModifierValidator),
    restrictedSkills: z.array(SkillNameValidator),
    requiredSkillsPerCharacterLevel: z.array(SkillNameValidator),
    wildcardSkills: z.number().nullish(),
});

export type RaceType = z.infer<typeof RaceValidator>;


export const CharacterValidator = z.object({
    user_id: IdValidator,
    name: z.string(),
    chapter_id: IdValidator.nullish(),
    character_class: ClassValidator,
    starting_xp: z.number().positive().default(25),
    primary_school: CharacterSpellSchoolValidator.nullish(),
    subrace: z.string().nullish(),
    race_name: RaceNameValidator,
}).merge(WithIdValidator);

export type SimpleCharacter = z.infer<typeof CharacterValidator>;
