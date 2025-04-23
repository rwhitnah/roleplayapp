import { Race } from './race.js';

const race = new Race('Stone Elf');
race.addSkill('BreakCommand');
race.addSkill('ResistCommand');
race.skillAdjustment({ skillName: 'Inscription', value: -1 });

export { race };
