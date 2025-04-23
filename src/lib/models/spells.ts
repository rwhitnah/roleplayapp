import { z } from "zod";
import { IdValidator, WithIdValidator } from "./common.js";
import { CharacterSpellSchoolValidator, SpellLevelValidator } from "./skills.js";

export const EffectGroupValidator = z.enum(["Evocation", "Earth/Necromancy", "Eldritch Force", "Binding", "Protection", "Curse", "Command"])

export type EffectGroup = z.infer<typeof EffectGroupValidator>;

export const SpellSchoolValidator = z.enum([...CharacterSpellSchoolValidator.options, 'General'])

export type SpellSchool = z.infer<typeof SpellSchoolValidator>;

export const SpellValidator = z.object({
    name: z.string(),
    level: SpellLevelValidator,
    school: SpellSchoolValidator,
    effect_group: EffectGroupValidator,
    description: z.string(),
    incant: z.string(),
    signature: z.boolean().default(false),
    duration: z.string(),
});

export type MemorizedSpell = z.infer<typeof MemorizedSpellValidator>;

export const MemorizedSpellValidator = z.object({
    memorization_list_id: IdValidator,
    spell_id: IdValidator,
    school: CharacterSpellSchoolValidator,
    spell: SpellValidator,
});

export type MemorizedSpellValidator = z.infer<typeof MemorizedSpellValidator>;

export const MemorizationListValidator = z.object({
    character_id: IdValidator,
    name: z.string(),
    memorized_spells: z.array(MemorizedSpellValidator),
}).merge(WithIdValidator);

export type SpellMemorizationList = z.infer<typeof MemorizationListValidator>;