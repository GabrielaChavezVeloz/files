var maths = prompt("Enter mark for Math");
var physics = prompt("Enter mark for Physics");
var chemistry = prompt("Enter mark for Chemistry");

var mark1 = maths !== null ? parseInt(maths) : 0;
var mark2 = physics !== null ? parseInt(physics) : 0;
var mark3 = chemistry !== null ? parseInt(chemistry) : 0;

console.log(mark1);
console.log(mark2);
console.log(mark3);

var average = function(mark1:number, mark2:number, mark3:number):string{
    var average = (mark1+mark2+mark3)/3;

    if(average<=70){
        return "C Grade";
    } else if(average>70 && average<=90){
        return "B Grade";
    } else{
        return "A Grade";
    }
}

console.log(average(mark1, mark2, mark3));