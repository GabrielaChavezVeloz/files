var studentScores = new Map([["john", 90], ["bob", 80], ["ahmed", 90]]);
console.log(studentScores.get("john"));
studentScores.set("gaby", 100);
console.log(studentScores.size);
studentScores.delete("gaby");
console.log(studentScores.has("gaby"));
//studentScores.clear();
console.log(studentScores);
console.log(studentScores.keys());
for (var _i = 0, _a = Array.from(studentScores.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
    console.log(studentScores.get(key));
}
console.log(studentScores.values());
console.log(studentScores.entries());
