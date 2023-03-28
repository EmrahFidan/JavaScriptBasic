let value;

// html sayfamıza dinamik olarak element ekleme

const newLink = document.createElement("a");
const cardbody =document.querySelector(".card-body");
newLink.id = "clear-todos";
newLink.className = "btn btn-success";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// text-node (text-content'den daha güvenli yöntem)
// const text =document.createTextNode("Hello");
// cardbody.appendChild(text); // son çocuktan sonra text ekle

newLink.appendChild(document.createTextNode("Google"));
cardbody.appendChild(newLink);

console.log(value);
