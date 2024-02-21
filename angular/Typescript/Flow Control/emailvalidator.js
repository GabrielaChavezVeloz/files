var email = "test@test.com";
var atposition = email.indexOf('@');
var dotposition = email.indexOf('.');
if (atposition == -1 || dotposition == -1) {
    console.log("Invalid email id ".concat(email));
}
else {
    console.log('Email is valid');
}
