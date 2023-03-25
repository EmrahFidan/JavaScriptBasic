let value;

const firstName = "Emrah";
const lastName = "Fidan";
const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = firstName.length;

// firstName + " " .....
value = firstName.concat(" ",lastName," ","HTML"); // ekleme 

value = firstName.toLowerCase; // tüm harfler küçük

value = firstName[0]; // "E"

value = firstName[firstName.length - 1]; // "h"  // son harf

value = firstName.indexOf("m"); // "m" hangi indekste ? // => 1
// eğer sonuç -1 verirse demek  ki aradığın şey yok

value = firstName.charAt(0); // 0. indekste ne varsa ver ? // "h"

value = langs.split(","); // girdiğiniz değere göre parçalar ve her parçayı dizinin elemanları olacak şekilde diziye koyar.

value = langs.replace("Python","CSS"); // python yerine CSS koy

value = langs.includes("Java"); // içinde var mı ?  // true-false



console.log(value);