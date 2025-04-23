import { Race } from './race.js';

const race = new Race('Dryad');
race.addSkill('ResistBinding');
race.skillMultiplier({ skillName: 'HerbalLore', value: 0.5 });

export { race };
