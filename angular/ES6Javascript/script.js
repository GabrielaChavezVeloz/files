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


/* Excercise 1 */

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


/* Excercise 2 */

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


/* Excercise 3 */
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map(function (image) {
    return image.height;
  });

  
/* Excercise 4 */
  var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = trips.map(function(trip) {
      return trip.distance / trip.time;
  });


  /* Excercise 5 */
  function pluck(array, property) {
    return array.map(function(a) {
        return a[property];
    });
}



/* 12 The Filter Helper */

var products = [
    { name: 'cucumber', type: 'vegetable'},
    { name: 'banana', type: 'fruit'},
    { name: 'celery', type: 'vegetable'},
    { name: 'orange', type: 'fruit'}
];

var filteredProducts = [];

for(var i = 0; i < products.length; i++){
    if(products[i].type === 'fruit'){
        filteredProducts.push(products[i]);
    }
}

filteredProducts;

products.filter(function(product){
  return product.type === 'vegetable';
});

/** */

var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

//Type is 'vegetable', quantity is greater than 0, price is less than 10

products.filter(function(product) {
  return product.type === 'vegetable' 
  && product.quantity > 0 
  && product.price < 10
});


/** */

var post = { id: 4, title: 'New Post'};
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat'}
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

/* Excercise 6 */

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
    return number > 50;
});


/* Excercise 7 */

var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
 
 var filteredUsers = users.filter(function(user) {
     return user.admin === true;
 });


/* Excercise 8 */
 function reject(array, iteratorFunction) {
  return array.filter((a) => {
    return !iteratorFunction(a);
  });
}


/* 15 The Find Helper */

var users = [
  { name:  'Jil' },
  { name:  'Alex' },
  { name: 'Bill' }
];

var user;

for(var i = 0; i < users.length; i++){
  if(users[i].name === 'Alex' ){
    user = users[i];
    break;
  }
}

user;

//returns the first

users.find(function(user) {
  return user.name === 'Alex';
});

/** */

function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});

/** */
var post = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post'}
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

/* Excercise 9 */

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin;
});

/* Excercise 10 */

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(a) {
    return a.balance === 12;
});


/* Excercise 11 */

function findWhere(array, criteria) {
  return array.find(function (a) {
    var property = Object.keys(criteria)[0];

    return a[property] === criteria[property];
  });
}


/* 18 The 'every' and 'some' Helper */

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
  var computer = computers[i];

  if(computer.ram < 16){
    allComputersCanRunProgram = false;
  } else{
    onlySomeComputersCanRunProgram = true;
  }
}

allComputersCanRunProgram;
onlySomeComputersCanRunProgram;


computers.every(function(computer) {
  return computer.ram > 16;
});

computers.some(function(computer) {
  return computer.ram > 16;
});

/** */

var names = [
  "Alexandria",
  "MAatthew",
  "Joe"
];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});

/** */

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

var fields = [ username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

formIsValid;

if(formIsValid){
  // allow user to submit!
} else {
  // show an error message
}


/* Excercise 12 */

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted;
});


/* Excercise 13 */

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});


/* 22 The 'reduce' Helper */

var numbers = [ 10, 20, 30 ];
var sum = 0;

for(var i = 0; i < numbers.length; i ++) {
  sum += numbers[i];
}

"----"

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

/** */

var primaryColors = [
  { color: 'red' },
  { color: 'yelow' },
  { color: 'blue'}
];

primaryColors.reduce(function(previous, primaryColors) {
  previous.push(primaryColors.color);

  return previous;
}, []);


/** */

function balanceParens(string) {
  return string.split("").reduce(function(previous, char) {
    if(previous < 0){
      return previous;
    }
    if(char === "("){
      return ++previous;
    }
    if(char === ")"){
      return --previous;
    }

    return previous;
  }, 0);
}

balanceParens(")(");


/* Excercise 14 */

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip) {
    return sum + trip.distance;
}, 0);


/* Excercise 15 */

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(sum, desk) {
    if(desk.type === 'sitting'){
        sum.sitting++;
    } else {
        sum.standing++;
    }
    
    return sum;
}, { sitting: 0, standing: 0 });


/* Excercise 16 */

function unique(array) {
  return array.reduce(function (previous, a) {
    var existing = previous.find(function (target) {
      return target === a;
    });

    if (!existing) {
      previous.push(a);
    }

    return previous;
  }, []);
}return array.reduce(function (previous, a) {
  var existing = previous.find(function (target) {
    return target === a;
  });

  if (!existing) {
    previous.push(a);
  }

  return previous;
}, []);


/* 25 Const/Let */

//var name = 'Jane';
//var title = 'Sotfware Engineer';
//var hourlyWage = 40;

//ES6

const names = 'Jane';
let title = 'Sotfware Engineer';
let hourlyWage = 40;

//some time later...

title = 'Senior Software Engineer';
hourlyWage = 45;

/** */

function count(targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  for(let i = 0; i < targetString.length; i++){
    if(characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

count('aeiobzxceiaipbiox');

/** */

function buildExpressions(code) {
  const transformCode = JSXTransformer.transform(code).code;
  const codeByLine = transformCode.split('\n');
  const tokenized = esprima.tokenize(transformCode, { loc: true });
  const parens = { '(': 0, '{': 0, '[': 0 };
  let wasOpen = false;

  var exp = _.reduce(tokenized, (expressions, { value, loc: { end } }, index) => {
    const lineNumber = end.line;
    const lineContents = codeByLine[lineNumber - 1];
    const lineHasMoreDelimiters = this.lineHasMoreDelimiters(end, lineContents);
    const endOfLine = end.column === lineContents.length;

    if(expressions[lineNumber]) {
      return expressions;
    }

    if(OPEN_DELIMITERS.includes(value)) {
      parens[value] += 1;
      wasOpen = true;
    }

    if(CLOSE_DELIMITERS.includes(value)) {
      parens[DELIMITER_MAP[value]] -= 1;
    }

    if(!lineHasMoreDelimiters && wasOpen && _.every(parens, count => count === 0)) {
      wasOpen = false;
      expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

      return expressions;
    }

    if(!lineHasMoreDelimiters && _.every(parens, count => count === 0)) {
      expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

      return expressions;
    }
    return expressions;

  }, {});
  
  return exp;
}


/* Excercise 17 */

const name = 'Gaby';
let age = 32;
const dateOfBirth = '06/06/1990';

/* Excercise 18 */

const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}


/* 27 Template Strings */

function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year}`;
}

getMessage();


/** */

const device_id = 4;
const guid = 20;
const username = "hello";

//const data = '{"device_id":"' + device_id + '"guid":"' + guid + '","username":"' + username + '","}';

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;

data;

/** */

const year = 2016;
const yearMessage = `The year is ${year}`;
yearMessage;


/* Excercise 19 */

function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}


/* Excercise 20 */

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}


/* 29 Arrow Functions */

/*const add = function(a,b) {
  return a + b;
}*/

const add = (a,b) => a + b;

const newSum = add(1,2);

newSum;


/** */

const double = (number1, number2) => {
  return 2 * number1 + number2;
};

double(8, 4);

/** */

const numbers = [1,2,3];

/*numbers.map(function(number) {
  return 2 * number;
});*/

numbers.map(number => 2 * number);


/** */

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();


/* Excercise 21 */

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


/* Excercise 22 */

const profile = {
  name: 'Alex',
  getName: function () {
    return this.name;
  },
};


/* 33 Enhanced Object Literals */

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

/** */

function saveFile() {
  $.ajax({  
    url: url, 
    data: data,
    method: 'POST'
  });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);


/* Excercise 23 */

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };


/* Excercise 24 */

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };


/* Excercise 25 */

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}


/* Excercise 26 */

const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};



/* 35 Default Function Arguments */

function makeAjaxRequest(url, method = 'GET') {
  /*if(!method) {
    method = 'GET';
  }*/

  return method;
  //logic to make the request
}

makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com', undefined);
makeAjaxRequest('google.com', 'POST');

/** */

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
createAdminUser();


/* Excercise 27 */

function sum(a = 0, b = 0) {
  return a + b;
}


/* Excercise 28 */

function addOffset(style = {} ) {
 
  style.offset = '10px';
  
  return style;
}


/* 37 Rest and Spread Operator */

//rest operator
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5,6,7);

/** */

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//defaultColors.concat(userFavoriteColors);z

//spread operator
[ 'green', 'blue', ...defaultColors, ...userFavoriteColors, ...fallColors ];

/** */

function validateShoppingList(...items) {
  if(items.indexOf('milk') <0) {
    return [ 'milk', ...items ];
  }
  
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

/** */

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};


/* Excercise 29 */

function product(...numbers) {

  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}


/* Excercise 30 */

function join(array1, array2) {
  return [...array1, ...array2];
}


/* Excercise 31 */

function unshift(array, ...numbers) {
  return [...numbers,...array];
}


/* 40 Destructuring */

var expense = {
  type: 'Business',
  amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

//ES6

const { type, amount } = expense;

type;
amount;

/** */

var savedField = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedField, { color: 'red' });


/** */

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, ...rest ] = companies;
name;
rest;


/** */

const companies = [
  { name: 'Google', location: 'Mountaint View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

const [{ location }] = companies;


const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
location;


/** */

function signup({ username, password, email, dateOfBirth, city }) {
  //create new user
}

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '6/6/1990',
  city: 'New York'
};

signup(user);

/** */

const points = [
  [4, 5], 
  [10, 1],
  [0, 40]
];

/*[
  { x:4, y:5 },
  { x:10, y: 1 },
  { x:0, y:40 }
]*/

points.map(([ x, y ]) => {
  return { x, y };
});



/* Excercise 32 */

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}


/* Excercise 33 */

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});


/* Excercise 34 */

const numbers = [1, 2, 3];

function double([head, ...rest]) {
  if (!head) {
    return [];
  }

  return [2 * head, ...double(rest)];
}


/* 46 Classes */

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

/*const car = new Car({ title: 'Focus' });
car.drive();
car;*/

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
 
Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });

toyota;
toyota.drive();
toyota.honk();

/** */

class Car {
  constructor(options) {
    this.title = options.title;
  }

  drive() {
    return 'vroom';
  }
}

/*const car = new Car({ title: 'Toyota' });
car;
car.drive();*/


class Toyota extends Car {
  constructor(options) {
    super(options); //Car.constructor
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });

toyota.honk();
toyota.drive();
toyota;


/* Excercise 35 */

class Monster {
  constructor(options) {
      this.health = 100;
      this.name = options.name;
  }
}


/* Excercise 36 */

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    
    bite(snake) {
        snake.health -= 10;
    }
}


/* 51 Generators */

const colors = ['red', 'green', 'blue'];

for(let color of colors) {
  console.log(color);
}

const numbers = [1,2,3,4];

let total = 0;
for(let number of numbers) {
  total += number;
}


/** */

function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go inyo the store with cash
  const stuffFromStore = yield 'cash';

  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [ stuffFromStore, cleanClothes ];
}

// stuff in the store
const gen = shopping();
gen.next(); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff
gen.next('groseries'); // leaving the store with groseries 

gen.next('clean clothes');


/** */

function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
gen.next();
gen.next();
gen.next();
gen.next();

const myColors = [];

for(let color of colors()) {
  myColors.push(color);
}

myColors;

/** */

/* old
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names;*/

/**S6 */

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
names;


/** */

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
}
values;


/* 63 Promises and Fetch */

promise = new Promise((resolve, reject) => {
  resolve(); // state resolve
});

promise = new Promise((resolve, reject) => {
  reject();
});

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest()

  //make request
  request.onload = () => {
    resolve();
  };
});

promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('i was also ran!!!'))
  .catch(() => console.log('uh oh!!'));


/** */

url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));


/** */

url = "https://jsonplaceholder.typicode123.com/posts123456";

fetch(url)
.then(data => console.log(data))
.catch(error => console.log('BAD', error));

// R_NAME_NOT_RESOLVED 