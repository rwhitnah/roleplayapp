import { Race } from './race.js';

const race = new Race('Biata');
race.addSkill('BreakCommand');
race.addSkill('ResistCommand');
race.skillMultiplier({ skillName: 'ReadMagic', value: 2 });

export { race };
