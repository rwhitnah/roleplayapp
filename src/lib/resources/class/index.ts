import { type ClassName, type ClassType } from "../../models/character.js";

export class Class implements ClassType {
  constructor(public name: ClassName, public maxArmor: number, public xpPerBody: number) { }
}

const Fighter = new Class('Fighter', 35, 5);
const Scout = new Class('Scout', 30, 7);
const Rogue = new Class('Rogue', 25, 8);
const Spellsword = new Class('Spellsword', 25, 9);
const Adept = new Class('Adept', 20, 10);
const Artisan = new Class('Artisan', 20, 12);
const Scholar = new Class('Scholar', 15, 15);
const classesList: Class[] = [Fighter, Scout, Rogue, Spellsword, Adept, Artisan, Scholar];
const classesMap = {
  Fighter,
  Scout,
  Rogue,
  Spellsword,
  Adept,
  Artisan,
  Scholar,
} as const;
export { classesList, classesMap, Fighter, Scout, Rogue, Spellsword, Adept, Artisan, Scholar };
