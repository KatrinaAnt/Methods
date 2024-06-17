import Daemon from '../class/Daemon';

const character = {
    _name: 'Евгения',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
};

test('checking class creation Daemon', () => {
    let daemon = new Daemon('Евгения');
    expect(daemon).toEqual(character);
});