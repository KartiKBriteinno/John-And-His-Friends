let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(employee => employee.profession === "developer");
  console.log(developers);
}


function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}


function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}


function removeAdmin() {
  const nonAdminEmployees = arr.filter(employee => employee.profession !== "admin");
  console.log(nonAdminEmployees);
}


function concatenateArray() {
  const newArray = [
    { id: 5, name: "Alice", age: "25", profession: "designer" },
    { id: 6, name: "Bob", age: "30", profession: "manager" },
    { id: 7, name: "Eve", age: "22", profession: "marketing" }
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
