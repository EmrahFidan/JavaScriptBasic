// Spread Operator

// const langs = ["python","C++","Java","Php"];
// console.log(langs[0],langs[1],langs[2],langs[3]);

// or
// console.log(...langs);

// arrayleri birleştirme
// const langs2 = [...langs,"Javascript", "Css", "Prolog"];
// console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];
// const [a,b] = numbers;
// console.log(a,b);

// kalanları başka array'e atma
// const [a,b,...numbers2] = numbers;
// console.log(numbers2);

// en güzel kullanımı
const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];
addNumbers(...numbers);
























