import { type Skill } from './skill.js';
import * as stealthSkills from './stealth/index.js';
import * as racialSkills from './racial/index.js';
import * as scholarlySkills from './scholarly/index.js';
import * as tradeSkills from './trade/index.js';
import * as weaponSkills from './weapon/index.js';
export const allSkills = [...Object.values(stealthSkills), ...Object.values(racialSkills), ...Object.values(scholarlySkills), ...Object.values(tradeSkills), ...Object.values(weaponSkills)].flatMap((skill) => skill);

export const rubyNameToSkillMap = new Map<string, Skill>(allSkills.map(skill => [skill.rubySkillName(), skill]));

export const jsonConvertedSkills = allSkills.map(skill => skill.toJson());