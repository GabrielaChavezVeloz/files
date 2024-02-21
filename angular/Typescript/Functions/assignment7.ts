var isPrimeNumber = (n)=>{
    var isPrime:boolean = true;

    if (n === 1) {
        isPrime = false;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is a not prime number`);
    }
}

isPrimeNumber(83);
isPrimeNumber(88);