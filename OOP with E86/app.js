// ES86 -> ECMAScript Editions
// javascript'in ilk Mocha'dır. SOnrasında Livescript olmuştur.
// Java'nın popülerliğini kullanmak için Javascript adında reklam amaçlı isim koydular.
// Resmi dili ECMA Script
// babel tarayıcıları anlayacağı dile çevirir. // Babel js

//-----------------------------------------------------------

// Sytantic Sugar deniliyor

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("İsim: "+ this.name);
// }
// const emp = new Employee("Emrah",20,7000);
// console.log(emp);

// or
// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   showInfos(){console.log("İsim: "+ this.name)}
// }
// const emp = new Employee("Emrah",20,7000);
// console.log(emp);
// emp.showInfos();

// ---------------------------------------------------------

// Static methods
// durağan methodlar, class içinde yazarsan buradan obje oluşturmasan bile kullanbiliyorsun

// class mathematic{
//     cube = x => console.log(x*x*x);
// }
// const math = new mathematic();
// math.cube(3);
// console.log(math);
// // cube fonksiyonumu kullnamka için math objemi oluşturmak zorunda kaldım,
// // bunu engellemek için
// class mathematic2{
//     static square = x => console.log(x*x);
// }
// mathematic2.square(8);

// // bakalım obje üzerinden bu fonksiyonu kullanabilecek miyim ?
// const math2 = new mathematic2();
// // math2.square(4); // kullanamadık
// // sadece sınıf üzerinden erişebiliriz

// ----------------------------------------------------

// İnheritance (en iyi yol)

class Person{ // SuperClass - base sınıf
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos = () => console.log("NAME: " + this.name + "  AGE: " + this.age);

}

class Employee extends Person{ // DerivedClass - SubClass -Türetilen sınıf
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
    
    showInfos = () => console.log("NAME: " + this.name + "  AGE: " + this.age + "  SALARY: " + this.salary);

    toString = () => console.log("Employee");

    raiseSlary = (amount) => this.salary += amount;

}
const emp = new Employee("Emrah",20,4000);
console.log(emp);
emp.showInfos();
emp.toString();

emp.raiseSlary(200);
emp.showInfos();




