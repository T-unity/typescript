class Vehicle {
  constructor() {
    this.passengers = [];
    console.log('スーパークラスvehicleを作成');
  }
  addPassenger(man) {
    this.passengers.push(man);
  }
}

class Car extends Vehicle {
  static proofOrigin() {
    return Math.floor( Math.random() * 10000 );
  }
  constructor(make, model) {
    super();
    console.log('vehicleクラスを継承したcarクラスを作成');
    this.make = make;
    this.model = model;
    this.number = Car.proofOrigin();
  }

  suddenlyStop() {
    console.log('あぶなーい');
  }
}

console.log('----- check -----');

const someVehicle = new Vehicle();
console.log(someVehicle.passengers);
console.log('-----');
someVehicle.addPassenger('一般男性');
someVehicle.addPassenger('一般成人男性');
console.log(someVehicle.passengers);

const prius = new Car('TOYOTA', 'prius');
console.log(prius);
console.log('-----');
prius.addPassenger('パパ');
prius.addPassenger('ママ');
console.log(prius);
prius.suddenlyStop();
