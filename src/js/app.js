export default class Character {
    constructor(name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    set name(value) {
        if(value.length >= 2 && value.length <= 10 && typeof value === 'string') {
            this._name = value;
            return;
        }
        throw new Error('Невалидное значение');
    }

    set type(value) {
        if([
            'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'
        ].includes(value)) {
            this._type = value;
            return;
        }
        throw new Error('Невалидное значение');
    }

    levelUp() {
        if(this.health === 0) {
            throw new Error('Нельзя повысить level умершего');
        }
        this.level += 1;
        this.health = 100;
        this.attack += ((this.attack * 20) / 100);
        this.defence += ((this.defence * 20) / 100);
    }

    damage(points) {
        if(this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

export class Bowman extends Character{
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character{
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character{
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character{
    constructor(name) {
        super(name, 'Undead');
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character{
    constructor(name) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10;
    }
}

export class Daemon extends Character{
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}