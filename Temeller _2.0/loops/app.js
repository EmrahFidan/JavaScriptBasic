// while döngüleri

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// break and continue

while (i < 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}
// 5 olduktan sonra döngü durur

// contunie ise yok sayarak çalışmaya devam eder.

while (i < 18) {
  if (i == 3 || i == 5) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// do-while (en az 1 defa çalışma garantisi)
// ilk başta do çalışır sonra koşulumuz kontrol edilir.

do {
  console.log(i);
  i++;
} while (i < 10);

// For

const langs = ["python", "java", "html", "css"];

langs.forEach(function (lang) {
  console.log(lang);
});
// dizinin elemanlarını yazma

//map function

const users = [
  { name: "Emrah", age: 20 },
  { name: "Rüzgar", age: 28 },
  { name: "Yağmur", age: 4 },
];

const names = users.map(function (user) {
  return user.name;
});

const ages = users.map(function (user) {
  return user.age;
});

console.log(names);
console.log(ages);

// for in döngüsü [sözlük gibi]

const user = {
  name: "Emrah",
  age: 20,
};

for (let key in user) {
  console.log(key, user[key]);
}


