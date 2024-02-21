var levels:number[] = [20,30,12,30,100,20]
console.log(levels.toString())
console.log(levels.join(" "))
console.log(levels.slice(3)) // shows at the 3 element and stops in 5 (3,5)
console.log(levels.toString())
levels.splice(2,3,88,99) //star in 2 and delete 3 elements
console.log(levels.toString())
levels.push(10,20,30)
console.log(levels.toString())
console.log(levels.pop()) // remove the last element and returns it
console.log(levels.toString())