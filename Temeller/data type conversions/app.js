let value;

// String'e çevirme

value = 123;
value = String(123);
value = String(3.14);
value = String(function(){console.log()});

// her şey String'e çevriliyor.

value = (10).toString();
value = (3.14).toString();

// sayılara çevirme

value = number("12345");
value = number(null); // NaN -> Not a Number Error

value = Number("3.14");
value = parseFloat("3.14"); // 3
value = parseInt("3");

const x = "hello" + 12; // tamamını String olarak alır


console.log(x);

console.log(value);