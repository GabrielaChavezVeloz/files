var employee = {
    id: 1,
    employeeName: "Gaby",
    salary: 100
};

for(var item in employee){
    console.log(employee[item])
}

var {id,employeeName,salary} = employee;
console.log(id+" "+employeeName+" "+salary);