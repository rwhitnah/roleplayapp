import { Race } from './race.js';

const race = new Race('High Ogre');
race.addSkill('RacialResolute');
race.addSkill('ResistNecromancy');
race.skillMultiplier({ skillCategory: 'Weapon', value: 0.5 });
race.skillMultiplier({ skillName: 'ReadMagic', value: 2 });
race.skillAdjustment({ skillName: 'Hardy', value: -1 });

export { race };
