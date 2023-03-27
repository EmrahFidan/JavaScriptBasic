// Fonksiyon Tanimlama
function merhaba (){
    console.log("Merhaba");
}
    
merhaba(); // Fonksiyon Çagrisi (Function Call)

// parameter function

function merhaba(name, age){
    console.log(`tsim: ${name} Ya$: ${age}`);
}
merhaba("Murat" ,25); // Fonksiyon Cagrisi (Function Call)

// undefined

function merhaba(name = "bilgi yok", age = "bilgi yok"){
    console.log(`tsim: ${name} Ya$: ${age}`);
}
merhaba();

//  return

function square(x){
    return x*x;
}

// return'un altında yazdığınız hiçbir zaman çalışmaz.

// Immediately Invoked Function Expression ( IIFE )
// tanımlandığı yerde çalışan fonksiyon

(function (name){
    console. log("Merhaba: " + name);   
})("Emrah");





