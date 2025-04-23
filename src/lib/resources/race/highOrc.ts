import { Race } from './race.js';

const race = new Race('High Orc');
race.addSkill('RacialResolute');
race.addSkill('ResistPoison');
race.skillMultiplier({ skillCategory: 'Weapon', value: 0.5 });
race.skillMultiplier({ skillName: 'ReadMagic', value: 2 });
race.skillAdjustment({ skillName: 'Hardy', value: -1 });

export { race };
