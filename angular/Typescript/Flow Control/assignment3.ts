var data = prompt("Enter a number");

if(data !== null){
    var number:number = parseInt(data);

    for(let i=1; i<number; i++){
        if(i%5 === 0){
            continue;
        } else {
            console.log(i);
        }
    }
}
