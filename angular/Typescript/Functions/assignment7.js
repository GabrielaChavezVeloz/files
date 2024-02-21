var isPrimeNumber = function (n) {
    var isPrime = true;
    if (n === 1) {
        isPrime = false;
    }
    else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log("".concat(n, " is a prime number"));
    }
    else {
        console.log("".concat(n, " is a not prime number"));
    }
};
isPrimeNumber(83);
isPrimeNumber(88);
