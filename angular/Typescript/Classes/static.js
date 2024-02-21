var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "BOA";
        console.log(Check.bankName);
    };
    Check.bankName = "Bank Of America";
    return Check;
}());
var check = new Check();
Check.bankName = "BOA";
check.display();
var check2 = new Check();
check2.accNo;
console.log(Check.bankName);
