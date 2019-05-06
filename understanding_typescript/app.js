"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Inheritance
var Warren = /** @class */ (function (_super) {
    __extends(Warren, _super);
    // age: number = 32;
    function Warren(username) {
        var _this = _super.call(this, "Warren", username) || this;
        _this.name = "Warren";
        _this.age = 32;
        return _this;
        // console.log(this.type); // Will return error
    }
    return Warren;
}(Person));
var warren = new Warren("max");
console.log(warren);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
