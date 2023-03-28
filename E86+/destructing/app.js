// Arrayler veya objelerimizin içindekileri almak için kısa bir yol

// let number1, number2;
// array = [100,200,300,400];
// number1 = array[0];
// number2 = array[1];
// console.log(number1,number2);

// or
// let number1, number2;
// array = [100,200,300,400];
// [number1,number2] = array;
// console.log(number1,number2);

// or
// array = [100,200,300,400];
// let[number1,number2] = array;
// console.log(number1,number2);


//----------------------------------------
// Object destructing

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40
// };
// const {number1,number2,number3} = numbers;
// console.log(number1,number2,number3);

// değişken isimleri objenin içndekilerle aynı olmalı
// let , const farketmez
// let {a,b,d} = numbers;
// console.log(a,b,d);
// // or
// const {a:number1,b:number2,d:number3} = numbers;
// console.log(number1,number2,number3);

const getLangs = () => ["python","Java","C++"]; 

const [lang1, lang2, lang3] = getLangs() ;
console.log(lang1,lang2,lang3);
