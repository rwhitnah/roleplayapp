import { Race } from './race.js';

const race = new Race('Biata');
race.addSkill('BreakCommand');
race.addSkill('ResistCommand');
race.restrictSkill('ReadMagic');

export { race };
