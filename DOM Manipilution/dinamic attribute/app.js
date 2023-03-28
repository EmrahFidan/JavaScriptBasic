const todoInput = document.getElementById("todo");
let element;

element = todoInput.classList.length;

todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
element = todoInput;

todoInput.classList.remove("newClass2");

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","NABER");
element = todoInput;

todoInput.setAttribute("title","INPUT");

// element = todoInput.hasAttribute("name");
todoInput.removeAttribute("name");


console.log(element);
