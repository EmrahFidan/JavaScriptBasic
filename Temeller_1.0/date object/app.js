let value;

const now = new Date(); // Şu anki zaman 
value = now;

const date1 = new Date("15-09-2002 09:05:00");

const date2 = new Date("August 15 2000");

const date3 = new Date("1/15/1999");

value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();

date1.setMonth(7);
date1.setFullYear(2001);


value = date1;

console.log(value);