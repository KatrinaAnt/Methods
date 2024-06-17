import Magician from '../class/Magician';

const character = {
    _name: 'Максим',
    _type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
};

test('checking class creation Magician', () => {
    let magician = new Magician('Максим');
    expect(magician).toEqual(character);
});