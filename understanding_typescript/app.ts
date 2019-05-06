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
