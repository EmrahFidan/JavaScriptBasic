// var

var number;
var number = 12;

console.log(number);

number = 21;
console.log(number);

// let

let name = "Emrah Fidan";
console.log(name);

// let name = "Emrah"; // bunu yapamazsın, var ile yapılabilir

name = "Rüzgar";
console.log(name);

// cons (constant)
// verdiğin değeri başka hiçbir yerde değiştiremezsin.

const x = 5;
console.log(x);

// const x = "emrah"; // ERROR

// x = 12; // ERROR

// const y; // Error
// y = 10; // Error

// console.log(y);

const array = [1,2,3,4,5];
console.log(array);
// array = [1,2,3,4,5,6]; // ERROR
// but
array.push(6); // bu referansı değiştirmez, array'ın gösterdiği yerin değeri değişiyor.
console.log(array);



