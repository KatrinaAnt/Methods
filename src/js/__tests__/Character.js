import Character from '../class/Character';

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
        let diedCharacter = new Character('Анастасия', 'Magician');
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
    const magician = new Character('Flash', 'Magician');
    magician.attack = 10;
    magician.defence = 40;
    magician.health = 35;
    magician.levelUp();
    expect(magician).toEqual(expected);
});

test('taking damage', () => {
    const magician = new Character('Кирилл', 'Magician');
    magician.defence = 40;
    magician.damage(15);
    expect(magician.health).toBeCloseTo(91);
});

