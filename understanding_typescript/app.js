"use strict";
// string
var myName = "Max";
// myName = 29;
//number
var myAge = 27.5;
// myAge = "Max";
//boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = "27";
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, "max"));
console.log(multiply(10, 2));
