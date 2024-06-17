import Undead from '../class/Undead';

const character = {
    _name: 'Азамат',
    _type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
};

test('checking class creation Undead', () => {
    let undead = new Undead('Азамат');
    expect(undead).toEqual(character);
});