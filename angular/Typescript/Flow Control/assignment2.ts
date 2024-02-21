var data = prompt("Enter a number");

if(data !== null){
    var number:number = parseInt(data);
    
    if(number%2 == 0){
        alert("The number " + number + " is even")
    } else {
        alert("The number " + number + " is odd")
    }
}
