import { Race } from './race.js';

const race = new Race('Dark Elf');
race.addSkill('ResistCommand');
race.addSkill('ResistSpell');
race.skillMultiplier({ skillName: 'Archery', value: 0.5 });

export { race };
