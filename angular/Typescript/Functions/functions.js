var hello = function (name) {
    return "Hello " + name;
};
function add(num1, num2) {
    return num1 + num2;
}
function calculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
function calculators(fun) {
    console.log(fun(10, 20));
}
function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    //if(role!=undefined){
    console.log("Role", role);
    // }
}
console.log(hello("Gaby"));
console.log("Sum is: " + add(10, 20));
display(1, "Gaby", "Admin");
calculators(add);
console.log(calculator()(20, 5));
