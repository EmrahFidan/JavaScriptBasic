// String biçimlendirme

const name = "Emrah Fidan";
const job = "Computer Engineer";
const salary = 5000;

const data = "Name: " + name + "\n" + "Job: " + job + "\n" + "Salary: " + salary;
console.log(data);

// or
// Alt Gr + ; + é 
const dataTL = `Name:${name}\nJob:${job}\nSalary:${salary}`;
console.log(dataTL);



const html = "<ul> " +
    "<li>" + name + "</li>" +
    "<li>" + job + "</li>" +
    "<li>" + salary + "</li>" +
    "</ul>";

document.body.innerHTML = html;

//or

const hmtlTL = `
<ul>
    <li>${name}</li>
    <li>${job}</li>
    <li>${salary}</li>
</ul>
`;

document.body.innerHTML = htmlTL;


