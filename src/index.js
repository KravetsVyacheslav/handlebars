import template from "./template.hbs";

const students = [
  { name: "Михайло", age: 15, occupation: "Менеджер" },
  { name: "Костя", age: 14, occupation: "Розробник" },
  { name: "Адріана", age: 15, occupation: "Розробник" },
];


const renderStudents = () => {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = template({ students });
};

// Функція для сортування за віком
const sortUsers = () => {
  students.sort((a, b) => a.age - b.age);
  renderStudents();
};


document.getElementById("sort").addEventListener("click", sortUsers);


renderStudents();