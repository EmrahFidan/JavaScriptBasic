let value;

const numbers = [43,56,84,62,11];

const langs = ["Python","Java","Html"];

const mixData = ["hello",20,undefined,3.14];

value = numbers.length;

numbers[2] = 1000; // 84 yerine 1000 gelir

value = numbers.indexOf(1000); // 2

value = numbers.push(20);

value = numbers.unshift(10); // Array'in başına değer ekleme

value = numbers.pop(); // Array'in sonundaki elemanı at

value = numbers.shift(); // Array'in başındaki elemanı at

// belli bir kısmı atma
numbers.splice(0,3);
value = numbers;

// array'i tersine çevirme
numbers.reverse();
value = numbers;

// sıralama
value = langs.sort(); // alfabetik sıralama

value = numbers.sort(function(x,y){
    // küçükten büyüğe 
    return x-y;
})


value = numbers.sort(function(x,y){
    // büyükten küçüğe
    return y-x;
})


console.log(value);