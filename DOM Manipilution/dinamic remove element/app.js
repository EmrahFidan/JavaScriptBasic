// dinamik element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// remove metodu 
todos[1].remove(); 

removeChild
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[0]);

console.log(todos);
console.log(todoList);
