// The constructor function is called automatically when the object is initialized.

class Car {
  constructor(name) {
    this.brand = name;
  }

  // Methods
  present() {
    return "I have a " + this.brand;
  }
}

// Inheritance
class Model extends Car {
  constructor(name, model) {
    super(name);
    this.name = name;
    this.model = model;
  }

  // Method
  show() {
    return this.present() + " it's a " + this.model;
  }
}

// const mycar = new Car("Ford");
// console.log(mycar);
// console.log(mycar.present());

const mycar = new Model("Ford", "mustang");
console.log(mycar);
console.log(mycar.show());
