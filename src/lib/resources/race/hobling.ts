import { Race } from './race.js';

const race = new Race('Hobling');
race.addSkill('RacialEvade');
race.addSkill('ResistPoison');
race.skillAdjustment({ skillName: 'Tinkering', value: -1 });

export { race };
