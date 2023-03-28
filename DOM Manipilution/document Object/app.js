let value;

value = document; // document'i görüyoruz
value = document.all; // html collection objesini gmrebileceğiz, array gibi
value = document.all.length; // HTML sayfamızda kaç tane element var
value = document.all[0];
value = document.all[document.all.length - 1];

// html collection üzerinde gezme
// const collections = Array.from(document.all);

// collections.forEach(function(collection){
//     console.log(collection);
// })

value = document.body; // body etiketine ulaşma

value = document.location.hostname;
value = document.location.port;
value = document.URL; // sayfanın bulunduğu URL

value = document.characterSet; // UTF-8

// Scriptler

value = document.scripts;

// links

value = document.links;
value = document.links[0]; // ilk linkimiz
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("href");
// linkler nereye gidiyor diye bakmak için

value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;
// class isimlerini ayrı ayrı görmek için

// forms

value = document.forms[0];
value = document.forms[0].id; // id ismini alma

console.log(value);
