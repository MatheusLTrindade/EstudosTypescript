class Spaceship {
    private name: string
    protected captain: string
    protected speed: number

    constructor(name: string, captain: string) {
        this.name = name
        this.captain = captain
        this.speed = 0
    }

    accelerate(rate: number, time: number) {
        this.speed = rate * time
    }

    get getName() { return this.name }

    set setName(name: string) { this.name = name }
}

class Fighter extends Spaceship {
    weapons: number

    constructor(name: string, captain: string, weapons: number) {
        super(name, captain)
        this.weapons = weapons
    }

    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!')
        }   
    }

    erase() { this.captain = '' }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 10)

ship.accelerate(50, 10)

ship.weapons = 20

ship.setName = 'X-Wing'