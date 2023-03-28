// sets = kümeler
// bir değeri sadce bir defa taşır.

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Emrah");
mySet.add(true);
mySet.add([1,2,3]);
console.log(mySet);

//or
const mySet2 = new Set([100,3.14,"Emrah"]);
console.log(mySet2);

console.log(mySet.size);

//  delete
mySet.delete("Emrah");
console.log(mySet);

// has 
console.log(mySet.has(3.14)); // içinde var mı // true
// array'i sorgulayamazsın çünkü array referans tip

// setlerden Array oluşturma
const array = Array.from(mySet);
console.log(array);





