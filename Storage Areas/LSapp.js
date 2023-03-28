// Local Storage
// sadece string değer kabul ediyor

// setItem

// localStorage.setItem("hareket","emrah");

// clear local storage

// localStorage.setItem("hareket","emrah");

// if(localStorage.getItem("hareket") === null){
//     console.log("Sorguladığınız veri bulunmuyor");
// }
// else{
//     console.log("Bulunuyor");
// }

// // local storage array yazma

// const todos = ["TD 1", "TD ", "TD 3"];
// // localStorage.setItem("todos",todos);

// // array yazma
// localStorage.setItem("todos",JSON.stringify(todos));

// // array okuma
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

//--------------------------------------------

// app

const form =document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();
}

