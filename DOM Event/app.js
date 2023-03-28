// const todoform = document.getElementById("todo-form");

// todoform.addEventListener("submit",submitform);

// function submitform(e){
//   console.log("Submit eventi");

//   //  işlemlşerimizin en altında yapamlıyız ve default özellikleri yok saymış,engellemiş oluyoruz
//   e.preventDefault();
// }

// ------------------------------------------------------------

// Klavye Eventleri

// keypres
// sadece harfler ve sayılar kabul ediliyor.
// document.addEventListener("keypress",run);

// function run(e) {
//   console.log(e.which); // hangi tuşa bastık görmek için (ascii table)
//   console.log(e.key); // hangi tuş

//   // console.log("NABER");
// }

// // keydown
// // tuşa bastığın anda event tetiklenir

// //document.addEventListener("keydown",run);

// function run(e) {
//   console.log(e.key); // hangi tuş
// }

// // keyup
// // tuşu bıraktığımız zaman event oluşuyor

// //document.addEventListener("keyup",run);

// function run(e) {
//   console.log(e.key); // hangi tuş
// }

// // app keyEvent

// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup", changeText);

// function changeText(e) {
//   header.textContent = e.target.value; // sürekli güncel tutmak için, her header oluştuğunda
//   // yazdığınız şeyin textbox alanında kalması için

//   // console.log(e.key);
//   // console.log(e.target.value); // input alanından değer almak için
// }

//----------------------------------------------------------------------------

// mouse eventleri

// const cardBody = document.querySelectorAll(".card-body")[1];

// const title = document.querySelector("#tasks-title");

// // click event
// // title.addEventListener("click",run);

// function run(e){

//   console.log(e.type);
// }

// // double click event
// // title.addEventListener("dblclick",run);

// function run(e){

//   console.log(e.type);
// }

// // mouse down - bastığımız ve tuttuğumuz zaman oluşur
// // title.addEventListener("mousedown",run);

// function run(e){

//   console.log(e.type);
// }

// // mouse up - tıklamadan elimizi çektiğimiz zaman oluşur
// // title.addEventListener("mouseup",run);

// function run(e){

//   console.log(e.type);
// }

// // mouse over - elementin üzerine geline oluşan event
// // title.addEventListener("mouseover",run);

// function run(e){

//   console.log(e.type);
// }

// // mouse out - elementin üzerine gel ve çık
// // title.addEventListener("mouseout",run);

// function run(e){

//   console.log(e.type);
// }
// mouse over ve out kullanmamaya çalış, çünkü belli bir alanı kapsadığında çok fazla işlem yapar

// ----------------------------------------------------------------------

// Input event

// çok önemli bir event
// document.addEventListener("DOMContentLoaded", load); // sayfamızdaki her şey yüklendikten sonra bu event oluşacak.

// function load(e) {
//   console.log("Sayfa yüklendi");
// }

// const filter = document.querySelector("#filter");

// focus
// odaktan çıkınca - blur
// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);

// function run(e) {
//   console.log(e.type);
// }

// paste
// filter.addEventListener("paste",run);

// function run(e) {
  // console.log(e.type);
// }

// copy
// filter.addEventListener("copy",run);

// function run(e) {
//   console.log(e.type);
// }

// cut
// filter.addEventListener("cut",run);

// function run(e) {
//   console.log(e.type);
// }

// select
// filter.addEventListener("select",run);

// function run(e) {
//   console.log(e.type);
// }

// -------------------------------------------------------------------------------

// event capturing ve bubbling olayları  
// Önemli
// en içteki elemnete event yaparsak bu En büyük parent'e kadar taşınıyor.

// EVENT BUBBLİNG

// document.querySelector(".container").addEventListener("click",function(){
//   console.log("Div Container");
// });

// document.querySelector(".card.row").addEventListener("click",function(){
//   console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//   console.log("Card Body");
// });

// EVENT CAPTURİNG, Delegation (tek fonksiyon sayesinde birden fazla işlemi aynı anda yapma)
// olay yakalama

// const cardBody = document.querySelectorAll(".card-body")[1].addEventListener("click",run);
// function run(e){
//   console.log("DENEME");
// }

// app

const cardBody = document.querySelectorAll(".card-body")[1].addEventListener("click",run);
function run(e){

  if(e.target.className === "fa fa-remove"){
    console.log("silme işlemi");
  }
  if(e.target.id === "filter"){
    console.log("filtreleme işlemi");
  }
  if(e.target.id === "clear-todos"){
    console.log("tüm taskları silme işlemi");
  }

  // console.log(e.target); // nereye bastığımızı görebiliyoruz
}

