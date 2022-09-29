export class Car {
    #maxTank;
    constructor(brand, model, maxTank) {
        this.brand = brand;
        this.model = model;
        this.#maxTank = maxTank;
        this.nowTank = Math.floor(Math.random() * maxTank);
    }
    getTitle() {
        return `${this.brand} ${this.model}`;
    }
    setModel (model) {
        this.model = model;
        return this;
    }
    get needPetrol() {
        return this.#maxTank - this.nowTank;
    }
    fillUp() {
        this.nowTank = this.#maxTank;
        return this;
    }
    get maxTank () {
        return this.#maxTank;
    }
    set maxTank (data) {
        console.log(`Нельзя поменять значение на ${data}`);
    } 
}

export const opel = new Car('Opel', 'Crossland', 45);

export class PassangerCar extends Car {
    typeCar = 'passanger';

    constructor(brand, model, maxTank, typeFuel = 'petrol') {
        super(brand, model, maxTank);
        this.typeFuel = typeFuel;
    }
}

export class Truck extends Car {
    typeCar = 'Truck';

    constructor(brand, model, maxTank, typeFuel = 'diesel') {
        super(brand, model, maxTank);
        this.typeFuel = typeFuel;
    }
}