import { Race } from './race.js';

const race = new Race('Sylvanborn');
race.addSkill('BreakCommand');
race.addSkill('ResistCommand');
race.skillAdjustment({ skillName: 'Craftsman', value: -1 });
race.requireSkillPerCharacterLevel('Craftsman');

export { race };
