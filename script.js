`use strict`;

class Car {
    constructor(wheelDrive) {
        this.wheelDrive = wheelDrive;
    } 
    mainWheels = () => console.log(`This ${this.model} is ${this.wheelDrive} wheel drive!`);
}

class VolkswagenGroup extends Car {
    constructor (carBase, wheelDrive) {
        super(wheelDrive)
        this.carBase = carBase
    }
    baseOfCar = () => console.log(`This car based on ${this.carBase}`);
}

class Audi extends VolkswagenGroup {
    #horsepower
    constructor (model, engine, quoterMileTime, horsepower, carBase, wheelDrive) {
        super(carBase, wheelDrive)
        this.model = model
        this.engine = engine
        this.#horsepower = horsepower
        this.quoterMileTime = quoterMileTime
    }
    whatCar = () => console.log(`This is good car model, because this is Audi ${this.model}`);
    engineVersion = () => console.log(`This Audi ${this.model} has engine - ${this.engine}`);
    horsePower = () => console.log(`Probably, this car is powerful, because has ${this.horsePower}hp`)
}

class Skoda extends VolkswagenGroup {
    #warrantyPeriod
    constructor (model, engine, maxSpeed, warrantyPeriod, carBase, wheelDrive) {
        super(carBase, wheelDrive)
        this.model = model
        this.engine = engine
        this.maxSpeed = maxSpeed
        this.#warrantyPeriod = warrantyPeriod
    }
    whatCar = () => console.log(`This is good car model, because this is Skoda ${this.model}`);
    engineVersion = () => console.log(`This Skoda ${this.model} has engine - ${this.engine}`);
    howFast = () => console.log(`You think ${this.model} fast? The maximum speed is just ${this.maxSpeed}km/h`);
}

class Bmw extends Car {
    #problemParts
    constructor (model, engine, weight, problemParts, wheelDrive) {
        super(wheelDrive)
        this.model = model
        this.engine = engine
        this.weight = weight
        this.#problemParts = problemParts
    }
    whatCar = () => console.log(`This is good car model, because this is BMW ${this.model}`);
    engineVersion = () => console.log(`This BMW ${this.model} has engine - ${this.engine}`);
    heavyCar = () => console.log(`Really heavy car. The weight is - ${this.weight}kg`);
}

class Mercedes extends Car {
    #price
    constructor (model, engine, ac, price, wheelDrive) {
        super(wheelDrive)
        this.model = model
        this.engine = engine
        this.ac = ac
        this.#price = price
    }
    whatCar = () => console.log(`This is good car model, because this is Mercedes ${this.model}`);
    engineVersion = () => console.log(`This Mercedes ${this.model} has engine - ${this.engine}`);
    airConditioning = () => console.log(`You worried about AC? This Mercedes ${this.model} ${this.ac}`);
    carPrice = () => console.log(`At this time, price for Mercedes ${this.model} is ${this.#price}$`);
}

const A3 = new Audi("A3", "2.5 V4", 10.4, 215, "Golf base", "All");
const Octavia = new Skoda("Octavia RS", "2.0 V6", 230, "1 year", "Golf base", "Forward");
const Seven = new Bmw("745i", "4.4 V8", 1845, "engine", "Rear");
const C280 = new Mercedes("C280", "3.0 V6", "has no AC", 7000, "Rear");

A3.whatCar();
A3.engineVersion();

Octavia.whatCar();
Octavia.howFast();
Octavia.mainWheels();

Seven.whatCar();
Seven.heavyCar();

C280.whatCar();
C280.airConditioning();
C280.carPrice();