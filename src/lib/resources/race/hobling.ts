import { Race } from './race.js';

const race = new Race('Hobling');
race.addSkill('RacialEvade');
race.addSkill('ResistPoison');
race.skillAdjustment({ skillName: 'CreateTrap', value: -1 });

export { race };
