import { Race } from './race.js';

const race = new Race('Dwarf');
race.addSkill('ResistElement');
race.addSkill('ResistPoison');
race.skillAdjustment({ skillName: 'Blacksmith', value: -1 });
race.skillAdjustment({ skillName: 'Hardy', value: -1 });

export { race };
