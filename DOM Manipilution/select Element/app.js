let value;

// element seçme (Query selector - CCS gibi düşün -
// sayfadaki tek elementi seçer - ilk bulduğunu gösterir)

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");

// birden çok element seçmek için (id hariç yani)
// querySelectorAll
// arraylere benzer

element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
})
