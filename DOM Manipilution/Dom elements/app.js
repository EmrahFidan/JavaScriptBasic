let value;

// DOM elementleri üzerinde gezinme

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row"); 

value = todoList;
value = todo;
value = cardrow;

// Child Nodes - text dahil

value = todoList.childNodes; 
value = todoList.childNodes[0];

// Children - sadace elementleri alır

value = todoList.children;

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti"; // cardrow'un torunu 

value = todoList;
// value = todoList.children[0]; //or 
value = todoList.firstElementChild;
value = todoList.children.length;

value = cardrow;
value = cardrow.parentElement; // ebebeyn almak için
value = cardrow.parentElement.parentElement; // dedesi

// element kardeşlerini bulma

value = todo;
value = todo.previousElementSibling; // bir önceki kardeşe git
value = todo.nextElementSibling; // bir sonraki kardeşe git
value = todo.nextElementSibling.nextElementSibling; // 2 sonraki kardeş
