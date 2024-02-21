var Vaccines:any = ["J&J","Pfizer","Sputnik"];  
Vaccines.push("Covaxin");

for(var i=0;i<Vaccines.length;i++){
    console.log(Vaccines[i]);
}

var[a,b,c,d] = Vaccines;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
