// Karşılaştırma Operatörleri

// === değerler ve tipler aynı mı ?
// bu  daha kullanışlı

console.log(2 === "2"); // false

// Mantıksal Bağlaçlar

// Not
console.log(!(2 === 2)); // false

// And ->   && 
// Or ->   ||

const error = true;

if(error === true){
    console.log("Hata oluştu");
}
else if(error == null){
    console.log("Bilinmiyor...");
}
else{
    console.log("Hatasız çalıştı");
}


const number =120;
if (number == 100){
    console.log("Sayı 100'e eşit");
}
else{
    console.log("Sayı 100'e eşit değil");
}
// OR

// Ternary Operator

console.log(number === 100 ? "Sayı 100." : "Sayı 100 değil.")
