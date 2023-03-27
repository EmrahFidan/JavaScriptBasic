// Global Scope
// herhangi bir fonksiyonun içinde olmayan sayfanın başındaki
// 
var a = 20;

function a(){
    // function scope
    // sadece fonksiyona özgü
}

if(1){
    // block sxope
    // var a = 10;
    // bir blok içinde tanımlanan var değişkenleri dışarıda varoluyorlar ama let ve const olmaz.
    // yani var kullanmayın
}


