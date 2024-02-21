var hello = function (name:string):string{
    return "Hello "+name;
}

function add(num1:number,num2:number):number{
    return num1+num2;
}

function calculator():any{ 
    function subtract(num1:number,num2:number):number{
        return num1-num2;
    }
    return subtract;
}

function calculators(fun:any):void{ // fun:any pass a function like parameter
    console.log(fun(10,20));
}

function display(id:number,name:string,role:string="Normal"){ //role?:string
    console.log("Id",id);
    console.log("Name",name);
    //if(role!=undefined){
    console.log("Role",role);
   // }
}

console.log(hello("Gaby"));

console.log("Sum is: "+add(10,20));
display(1,"Gaby","Admin");

calculators(add);

console.log(calculator()(20,5));