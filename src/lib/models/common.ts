import { z } from "zod";
export const IdValidator = z.number().int().positive();
export type Id = z.infer<typeof IdValidator>;
export const WithIdValidator = z.object({ id: IdValidator })
export type WithId = z.infer<typeof WithIdValidator>;
export const ActivityStampValidator = z.object({ created_at: z.date(), updated_at: z.date() });
export type ActivityStamp = z.infer<typeof ActivityStampValidator>;

