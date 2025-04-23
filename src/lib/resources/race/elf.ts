import { Race } from './race.js';

const race = new Race('Elf');
race.addSkill('ResistCommand');
race.skillMultiplier({ skillName: 'Archery', value: 0.5 });

export { race };
