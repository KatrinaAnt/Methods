import Zombie from '../class/Zombie';

const character = {
    _name: 'Лидия',
    _type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
};

test('checking class creation Zombie', () => {
    let zombie = new Zombie('Лидия');
    expect(zombie).toEqual(character);
});