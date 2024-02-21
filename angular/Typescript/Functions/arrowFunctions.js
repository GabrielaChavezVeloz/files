var hello = function (name) {
    return "Hello " + name;
};
var multiply = function (num1, num2) {
    return num1 * num2;
};
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
console.log(hello("Gaby"));
console.log("Product is", multiply(5, 8));
