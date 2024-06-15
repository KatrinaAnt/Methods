import Character, { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../app';

const character = [
    {
        _name: 'Виктор',
        _type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    },
    {
        _name: 'Анастасия',
        _type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    },
    {
        _name: 'Максим',
        _type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    },
    {
        _name: 'Евгения',
        _type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    },
    {
        _name: 'Азамат',
        _type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    },
    {
        _name: 'Лидия',
        _type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
];

test('checking class creation Bowman', () => {
    let bowman = new Bowman('Виктор');
    expect(bowman).toEqual(character[0]);
});

test('checking class creation Swordsman', () => {
    let swordsman = new Swordsman('Анастасия');
    expect(swordsman).toEqual(character[1]);
});

test('checking class creation Magician', () => {
    let magician = new Magician('Максим');
    expect(magician).toEqual(character[2]);
});

test('checking class creation Daemon', () => {
    let daemon = new Daemon('Евгения');
    expect(daemon).toEqual(character[3]);
});

test('checking class creation Undead', () => {
    let undead = new Undead('Азамат');
    expect(undead).toEqual(character[4]);
});

test('checking class creation Zombie', () => {
    let zombie = new Zombie('Лидия');
    expect(zombie).toEqual(character[5]);
});

test.each([
    [
        'Long Name', 'Индивидуалист', 'Невалидное значение'
    ],
    [
        'Short Name', 'Я', 'Невалидное значение'
    ],
    [
        'Not String', 228, 'Невалидное значение'
    ],
])('throw error %s', (_, value, expected) => {
    expect(() => {
        new Character(value, 'Magician', 25, 30);
    }).toThrow(new Error(expected));
});

test('throw error invalid type', () => {
    expect(() => {
        new Character('Flash', 'King', 25, 30);
    }).toThrow(new Error('Невалидное значение'));
});

test('throw error character died', () => {
    expect(() => {
        let diedCharacter = new Swordsman('Анастасия');
        diedCharacter.health = 0;
        return diedCharacter.levelUp();
    }).toThrow(new Error('Нельзя повысить level умершего'));
});

test('level up', () => {
    const expected = {
        _name: 'Flash',
        _type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    };
    const bowman = new Magician('Flash');
    bowman.health = 35;
    bowman.levelUp();
    expect(bowman).toEqual(expected);
});

test('taking damage', () => {
    const bowman = new Bowman('Кирилл');
    bowman.damage(15);
    expect(bowman.health).toBeCloseTo(88.75);
});

