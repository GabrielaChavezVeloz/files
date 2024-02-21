var colors = [ 'red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
 console.log(colors[i]); 
}

colors.forEach(function (color){
  console.log(color);
              
               });


        
/* 7 forEach Helper */

//creat an array of numbers
var numbers = [1,2,3,4,5];

//create a varible to hold the sum
var sum = 0;

function adder(number){
    sum += number;
}

//loop over the array, incrementing the sum variable
numbers.forEach(adder);

//print the sum variable
sum;


/* Excersice 1 */

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(function(post) {
      savePost(post);
    });
}


/* Excersice 2 */

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
  ];
  
  var areas = [];
  images.forEach(function (image) {
    areas.push(image.height * image.width);
  });



/* 9 The Map Helper */

var numbers = [1,2,3];
var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number) {
    return number * 2;
});

doubled;

doubledNumbers;

/************* */

var cars = [
    { model: 'Buick', price: 'CHEAP'},
    { model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car) {
    return car.price;
});

prices;