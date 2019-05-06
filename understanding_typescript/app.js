"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "_blank";
        this.age = 31;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
        // return this.age;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(type);
    };
    return Person;
}());
var person = new Person("Warren", "WRNRDR");
console.log(person);
person.printAge();
// person.setType("Cool Guy");
