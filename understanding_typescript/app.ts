class Person {
  name: string;
  private type: string = "_blank";
  protected age: number = 31;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge(): void {
    console.log(this.age);
    this.setType("Old Guy");
    // return this.age;
  }

  private setType(type: string) {
    this.type = type;
    console.log(type);
  }
}

const person = new Person("Warren", "WRNRDR");
console.log(person);
person.printAge();
// person.setType("Cool Guy");

// Inheritance
class Warren extends Person {
  name: string = "Warren";
  // age: number = 32;

  constructor(username: string) {
    super("Warren", username);
    this.age = 32;
    // console.log(this.type); // Will return error
  }
}

const warren = new Warren("max");
console.log(warren);

// Getters & Setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
