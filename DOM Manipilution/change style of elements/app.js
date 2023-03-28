let value;

// elementleri seçme ve style özelliklerini değiştirme

const element = document.querySelector("#clear-todos");
console.log(element);

// element özellikleri

console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent); // yazı kısmını gösterme

console.log(element.innerHTML); // içindeki html etiketleri dahil hepsini al
console.log(element.href);
console.log(element.style); //  elementimizin tüm CSS özelliklerini gösterir.

element.className = "btn btn-success";
element.style.color = "blue";
element.style.marginLeft = "20px";
element.href = "https://www.google.com.tr";
element.target = "_blank"; // link'i yeni sekmede aç

element.textContent = "SİLİN";
// html olarak değiştir, bu kdaha fazla kullanılır
element.innerHTML = "<span style= 'color:green'>Sil AQ</span>";

const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(el){
    el.style.color = "blue";
    el.style.background = "#eee";
})

// w3scholl childd selector.com

let element = document.querySelector("li:last-child");

element = document.querySelector("li:nth-child(2)");

element = document.querySelectorAll("li:nth-child(odd)"); // tek indexli çocuklar yani 1. ve3. çocuk

element2 = document.querySelectorAll("li:nth-child(even)");

element.forEach(function (el) {
  el.style.color = "blue";
  el.style.background = "#eee";
});

element2.forEach(function (el) {
  el.style.color = "green";
  el.style.background = "#eee";
});

console.log(element);
