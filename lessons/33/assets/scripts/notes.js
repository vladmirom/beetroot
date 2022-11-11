/**
 * Arrays.
 */

/* Creating values */
// Array constructor
// let arr = new Array();
// let arr = [];

// Literal array
let arr = ['apple', 1, null, {name: 'pinaple'}];
let fruit = ['apple'];

/* Add values to array */
fruit[1] = 'orange';
fruit[fruit.lenght - 1 ] = 'banana'; // adds to the last element of the array.
fruit.at(-1) = 'clenentine'; // adds to the last element of the array.

/* Getting values */
fruit[0]; // => 'apple'.
fruit[3].name; // => 'pinaple', since this is an object in array.

/* Array methods */
// Adding and removing values
fruit.shift(); // removes ONLY the FIRST element from the array and returnes it.
fruit.unshift('lemon'); // adds ONLY the FIRST element to the array and returnes the length of the array.
fruit.pop(); // removes ONLY the LAST element from the array and returnes it.
fruit.push('pear', 'peach'); // adds ONLY the LAST element/s to the array and returnes the length of the array.

// Calculate length of array
let arrLength = fruit.length();

// Delete the value
delete fruit[0]; // Keeps the index, but removes the value. It will be [0] => empty

// Splice method
// - Removes the elements fruit.splice( start index, number of elements)
fruit.splice( 2, 1);

// - Adds the elements fruit.splice( start index, number of elements should equal to 0, first element that we add, second element that we add)
fruit.splice( 2, 0, 'melon', 'watermelon');

// Slice method. COPIES values into a new array. 
// First index included, last index is not included.
let fruit = ['apple', 'banana', 'orange', 'grapes'];
fruit.slice( 1, 3); // => 'banana', 'orange'

// Concat method. Copies the array and can add values from more arrays to the new array.
// Does not create unique values. So the new array can have 2 'apple'.
fruit.concat(['pear', 'peach'], ['lemon', 'apple']); // => ['apple', 'banana', 'orange', 'grapes', 'pear', 'peach', 'lemon', 'apple'];

/* Comparing arrays */
//  HOMEWORK
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

/* Arrays in loop */
for (let i = 0; i < fruit.length; i++) {
  // console.log(fruit[i]);
}
  
for ( let one_fruit of fruit) {
  // console.log(one_fruit);
}

// Better not to use this method, since it is done for object and works way more slow than for of.
for ( let key in fruit) {
  // console.log(fruit[key]);
}

fruit.forEach(function(one_fruit, index, array) {
  // console.log(one_fruit, index, array);
})

fruit.forEach((one_fruit, index, array) => {
  // console.log(one_fruit, index, array);
})

// IndexOf, lastIndexOf, includes metrods
let indexArr = [1, 0, false, true, false];

indexArr.indexOf(false); // => 2
indexArr.lastIndexOf(false); // => 4
indexArr.lastIndexOf(0); // => true

// Find method.
fruit.find(function(item, index, array) {
  // return item === 1; // => underfined
  // return item === 'apple'; // => apple
})

fruit.find((item => item === 'apple'));

// FindIndex method.
fruit.findIndex((item => item === 'apple')); // => 0

// Filter method.
let filterArr = [1, 2, 3, 4, 5, 6, 7];

filterArr.filter(inBetween(3, 6)); // => 3,4,5,6
filterArr.filter(inArray([1, 2, 10])); // => 1,2

// Sort method.
let sortArr = [ 1, 2, 15 ];
sortArr.sort(); // => 1, 15, 2. String 2 is bigger than string 15.

// Reverse method.
let reverseArr = [1, 2, 3, 4, 5];
reverseArr.reverse(); // => 5,4,3,2,1.

// Split method.
let splitArr = '1, 2, 3, 4, 5';
splitArr.split(', '); // => [1, 2, 3, 4, 5.

// Join method.
let joinArr = '1, 2, 3, 4, 5';
splitArr.split(', '); // => [1, 2, 3, 4, 5.

// Map method. Mofidies each value.
fruit = fruit.map((item => item + ' juice')); // => ['apple juice', 'orange juice', ...]

// isArray method. Checks if the array is array.
fruit = fruit.map((item => item + ' juice'));
console.log(typeof {}); // object
console.log(typeof []); // object

console.log(Array.isArray(fruit)); // true
console.log(Array.isArray({})); // false because object


/* Functions and arrays */
function fruitFunctions(a, b) {
  console.log(arguments); // arguments is a reserveed name. => a, b
}

let fruitArrow = () => { console.log(arguments); } // Arrow functions don't have arguments. => Underfined 

