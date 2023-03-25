const programmer = {
    name : "Emrah Fidan",
    age :  20,
    email : "deneme.work@gmail.com",
    langs : ["Python","Java","JavaScript"],

    adress : {
        city : "Turkey",
        street : "Manisa" 
    },

    work : function(){
        console.log("Çalışıyor...");
    }
}

let value;

value = programmer.name;

value = programmer.adress.city;

programmer.work();

const programmers = [
    {name: "Emrah Fidan",age: 20}
];

value = programmers[0].name;


console.log(value);