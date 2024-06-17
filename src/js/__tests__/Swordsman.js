import Swordsman from '../class/Swordsman';

const character = {
    _name: 'Анастасия',
    _type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
};

test('checking class creation Swordsman', () => {
    let swordsman = new Swordsman('Анастасия');
    expect(swordsman).toEqual(character);
});