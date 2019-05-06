// // Exercise #1
// // type AccountType = {
// //   money: number;
// //   deposit: (value: number) => void;
// // };

// // type Me = {
// //   name: string;
// //   bankAccount: AccountType;
// //   hobbies: string[];
// // };

// // let bankAccount: AccountType = {
// //   money: 2000,
// //   deposit(value: number): void {
// //     this.money += value;
// //   }
// // };

// // let myself = {
// //   name: "Max",
// //   bankAccount: bankAccount,
// //   hobbies: ["Sports", "Cooking"]
// // };

// // myself.bankAccount.deposit(3000);

// // console.log(myself);

// // Exercise #2
// // Exercise 1 - Maybe use an Arrow Function?
// // var double = function(value) {
// //   return value * 2;
// // };
// // console.log(double(10));

// const double = (value: number): number => value * 2;
// console.log(double(10));

// // // Exercise 2 - If only we could provide some default values...
// // var greet = function(name) {
// //   if (name === undefined) {
// //     name = "Max";
// //   }
// //   console.log("Hello, " + name);
// // };
// // greet();
// // greet("Anna");

// const greet = (name: string = "Max"): void => {
//   console.log(`Hello, ${name}`);
// };
// greet();
// greet("Anna");

// // // Exercise 3 - Isn't there a shorter way to get all these Values?
// // var numbers = [-3, 33, 38, 5];
// // console.log(Math.min.apply(Math, numbers));

// const nums: number[] = [-3, 33, 38, 5];
// console.log(Math.min(...nums));

// // // Exercise 4 - I have to think about Exercise 3 ...
// // var newArray = [55, 20];
// // Array.prototype.push.apply(newArray, numbers);
// // console.log(newArray);

// const newArray: number[] = [55, 20];
// newArray.push(...nums);
// console.log(newArray);

// // // Exercise 5 - That's a well-constructed array.
// // var testResults = [3.89, 2.99, 1.38];
// // var result1 = testResults[0];
// // var result2 = testResults[1];
// // var result3 = testResults[2];
// // console.log(result1, result2, result3);

// const testResults: number[] = [3.89, 2.99, 1.38];
// const [result1, result2, result3] = testResults;
// console.log(result1, result2, result3);

// // // Exercise 6 - And a well-constructed object!
// // var scientist = { firstName: "Will", experience: 12 };
// // var firstName = scientist.firstName;
// // var experience = scientist.experience;
// // console.log(firstName, experience);

// type Person = {
//   firstName: string;
//   experience: number;
// };

// const scientist: Person = { firstName: "Will", experience: 12 };
// const { firstName, experience } = scientist;
// console.log(firstName, experience);
