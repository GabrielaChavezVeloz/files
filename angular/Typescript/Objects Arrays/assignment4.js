var employee = {
    id: 1,
    employeeName: "Gaby",
    salary: 100
};
for (var item in employee) {
    console.log(employee[item]);
}
var id = employee.id, employeeName = employee.employeeName, salary = employee.salary;
console.log(id + " " + employeeName + " " + salary);
