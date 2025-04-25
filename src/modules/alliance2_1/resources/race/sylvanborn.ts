import { Race } from './race.js';

const race = new Race('Sylvanborn');
race.addSkill('BreakCommand');
race.addSkill('ResistCommand');
race.skillAdjustment({ skillName: 'Profession', value: -1 });

export { race };
