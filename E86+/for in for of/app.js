const person = {
    name: "Emrah",
    age: 20,
    salary: 2000
}

const langs = ["python","java","html"];
const name = "Rüzgar";

// for in
for (let x in person){
    console.log(x,person[x]);
}

for (let index in langs){
    console.log(index,langs[index]);
}

for (let x in name){
    console.log(x,name[x]);
}

// for of
// Objeler üzerinde gezemezsin
// değerler üzerinde gezinme

for (let x of name){
    console.log(x);
}
for (let index of langs){
    console.log(index);
}



