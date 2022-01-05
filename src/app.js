class Car {
  static proofOrigin() {
    return Math.floor( Math.random() * 10000 );
  }
  constructor(make, model) {
    this.model = model;
    this.number = Car.proofOrigin();
  }
}

const prius = new Car('TOYOTA', 'prius');
console.log(prius);
