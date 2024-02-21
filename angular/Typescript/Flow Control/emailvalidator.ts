var email:string = "test@test.com";
var atposition:number = email.indexOf('@');
var dotposition:number = email.indexOf('.');

if(atposition == -1 || dotposition == -1){
    console.log(`Invalid email id ${email}`);
} else{
    console.log('Email is valid');
}