// yorum satırları böyle yapılır
/* çoklu yorum satırları */
// pp = console.log();

var a = 20,
  b = 10,
  c = 40;
console.log(a, b, c);

console.log("Hello");

// primitive and referance data type

// primitive

var number = 10;
var number2 = 3.14;
console.log(number);
console.log(number2);
console.log(typeof number);
console.log(typeof number2);

var name = "Emrah";
console.log(name);

var t = true;
console.log(typeof t);

var empty = null; // hiçbir şey taşımayan değer
console.log(empty);

var undefine;
console.log(undefine); // tanımsız değer

var numbers = [1,2,3,4,5];
console.log(numbers);
console.log(numbers[0]);

var person = {
    name : "Emrah Fidan",
    age : 20
}
console.log(person);

var date = new Date();
console.log(date);

var hello = function(){
    console.log("Hello User");
}
console.log(hello);

// referances data type

var numberPre = 10;
var numberRef =numberPre;
console.log(numberPre,numberRef);
numberPre = 20;
console.log(numberPre,numberRef);


