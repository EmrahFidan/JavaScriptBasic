
// replace

const cardbody = document.querySelectorAll(".card-body")[1];
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "NEW TO DO";

// eski element
const oldELement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldELement);
