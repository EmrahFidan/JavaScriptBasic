// daha kısa fonksiyon yazımı yapabiliyoruz

const hello = () => {
    console.log("Merhaba");
}
// hello();

const test = (firstName,lastName) => {
    console.log("Hello",firstName,lastName);
}
// test("Emrah","Fidan"); 
// or, tek parametre alacaksa parantez içinde yazmasanız da olur

const test2 = firstName => {
    console.log("Hello",firstName);
}
// test2("Yagmur"); 
// or fonksiyonunuz tek bir işlem yapıyorsa
const test3 = firstName => console.log("Hello",firstName);
// test2("User");

const cube = number => number*number*number;
// yani return demeye de gerek yok
console.log(cube(3));

