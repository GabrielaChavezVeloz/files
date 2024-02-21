let studentScores = new Map([["john", 90], ["bob", 80], ["ahmed", 90]]);
console.log(studentScores.get("john"));
studentScores.set("gaby", 100);
console.log(studentScores.size);
studentScores.delete("gaby");
console.log(studentScores.has("gaby"));
//studentScores.clear();
console.log(studentScores);
console.log(studentScores.keys());
for(let key of Array.from(studentScores.keys())){
    console.log(key);
    console.log(studentScores.get(key));
}

console.log(studentScores.values());
console.log(studentScores.entries());