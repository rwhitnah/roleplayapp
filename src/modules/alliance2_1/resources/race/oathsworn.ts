import { Race } from './race.js';

const race = new Race('Oathsworn');
race.addSkill('RacialResolute');
race.addSkill('ResistElement');
race.skillAdjustment({ skillName: 'Hardy', value: -1 });

export { race };
