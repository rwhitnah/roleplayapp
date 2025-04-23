import { Race } from './race.js';

const race = new Race('Wylderkin');
race.addSkill('Claws');
race.setWildcards(2);
race.skillMultiplier({ skillName: 'ReadMagic', value: 2 });

export { race };
