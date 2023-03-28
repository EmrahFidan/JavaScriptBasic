// local stroge'de herşey olduğu yerde kalıyor, silinmiyor.
// session stroge'de sekmeygi kapattığın an siliniyor
// fonksiyonları bile aynı


// key - value

// butonları seçmek
const add =  document.querySelector("#add");
const del =  document.querySelector("#delete");
const clear =  document.querySelector("#clear");

// ınputlar
const addkey = document.querySelector("#addkey");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}
function clearItems(e){
    sessionStorage.clear();
}

