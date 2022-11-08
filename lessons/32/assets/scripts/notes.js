/**
 * Objects.
 */

/* Creating values */
// Object constructor
// let user = new Object()

// Literal object
let user = {
  user_name: 'Ivan',
  age: 30,
  'user city': 'Lviv'
}

/* Getting values */
// console.log(user.user_name);
// console.log(user.age);
// console.log(user['user city']); // if the key has 2 word

/* Adding more values */
user.role = 'user';
user['user role'] = 'user';

// console.log(user);

/* Removing pair from object */
delete user['user role'];
// console.log(user);

/* Check if the key exists in the object */
let exist = user_name in user;

/* Object loops */
for (key in user) {
  console.log(key);
  // console.log(user[key]);
}

/* Object and variable differnce */
let userName = 'Ivan',
    customer = userName;
// console.log(userName, customer); // Ivan, Ivan.

userName = 'Vasyl';
// console.log(userName, customer); // Vasyl, Ivan.

/* Cloning with for */
let user = {
  name: 'Ivan',
  age: 30
}

let user1 = {
  name: 'Maria'
}

let customerData = {};

for (let key in user) {
  customerData[key] = user[key];
}
console.log(key);

/* Cloning with Object.assign */
Object.assign(customer, user); // Copy user into customerData
// console.log(customer, user);

/* Merging 2 objects into one with Object.assign */
Object.assign(customer, user, user1); // Copy user into customerData, and user1.mane will overwrite user.mane
// console.log(customer, user);

/* Comparing objects */
let fruit = {
  sweet: 'apples',
  sour: 'lemons',
  bitter: 'grapefruit'
}

let vegetables = {
  sweet: 'pumpkin',
  sour: 'rhubarb', // ревень
  bitter: 'radish',
  spicy: 'pepper'
}

// Method 1. Referential equality.
fruit === vegetables; // false
fruit === vegetables; // false
Object.is(fruit, vegetables); // false

// Method 2. Manual comparison.
fruit.sweet === vegetables.sweet ; // false

// Method 3. Shallow equality.
const keys1 = Object.keys(fruit);
const keys2 = Object.keys(vegetables);
let result = true;

if (keys1.length === keys2.length) {
  for (let key of keys1) {
    if (fruit[key] !== vegetables[key]) {
      result = false;
    }
  }
} else {
  result = false;
}

// Method 5. Deep equity.
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === 'object';
}

let objectDeepEquityComparisonResult = deepEqual(fruit, vegetables); // false

// Method 5. JSON.stringify trick
JSON.stringify(fruit) === JSON.stringify(vegetables); // true

/* Const as an object */
const userConst = {
  name: 'Ivan',
  age: 30,
  sayHi: function() {
    console.log('Hi!');
  }
}

userConst.name = 'Dmytro';
delete userConst.name;
userConst.name = 16;

/* Methods - object functions */
// This

let userThis = {
  name: 'Ivan',
  age: 30
}

// userThis.sayHi = function () {
//   console.log('Hi!');
// }
// userThis.sayHi();

function sayHi() {
  console.log(`Hi ${this.name}`);
}
userThis.sayHi = sayHi; // declaring
userThis.sayHi(); // Calling
