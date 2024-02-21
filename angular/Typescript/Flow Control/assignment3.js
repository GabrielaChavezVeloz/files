var data = prompt("Enter a number");
if (data !== null) {
    var number = parseInt(data);
    for (var i = 1; i < number; i++) {
        if (i % 5 === 0) {
            continue;
        }
        else {
            console.log(i);
        }
    }
}
