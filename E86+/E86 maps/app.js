// her key(anahtar değer) = value(değer);
// key herhangi bir veri tipi olabilir
// map => Dictionary

// let myMap = new Map();

// const key1 = "emrah";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// set
// myMap.set(key1,"String değer");
// myMap.set(key2,"Object literal değer");
// myMap.set(key3,"Function değer");

// // get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

// console.log(myMap.size);

const cities = new Map();

cities.set("Ankara",5);
cities.set("İzmir",4);
cities.set("İstanbul",15);

// for each
cities.forEach(function(value,key){
    console.log(key,value);
})
// for of
for (let [key,value] of cities){
    console.log[key,value];
}

// map keys
for(let key of cities.keys()){
    console.log(key);
}
// map values
for(let value of cities.values()){
    console.log(value);
}

// arraylerden  map oluşturma
console.log("---------------");

const array = [["key1","value1"],["key2","value2"],["key3","value3"]];
const lastMap = new Map(array);
console.log(lastMap);

// Maplerden array opluşturma
const array2 = Array.from(cities);
console.log(array2);


