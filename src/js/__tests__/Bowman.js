import Bowman from '../class/Bowman';

const character = {
    _name: 'Виктор',
    _type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
};

test('checking class creation Bowman', () => {
    let bowman = new Bowman('Виктор');
    expect(bowman).toEqual(character);
});