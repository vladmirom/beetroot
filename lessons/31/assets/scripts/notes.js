/**
 * Functions
 */
//  showMessage('Hello!');
//  showMessage('Hi!');

function showMessage(message) {
  let answer = `${message} I'm here!`;
  // alert(answer);
}

// Redeclaring variables
let userName = 'Ivan';

function changeName(message) {
  // If we declare the variable locally with let, then outside function it will be using global function.
  // let userName = 'Vasyl';
  // If we re-write already declared variable userName without let, the variable will have the value from the function after we call the function.
  userName = 'Vasyl';

  // alert(`Hi ${userName}. ${message}`);
}

// console.log(userName); // Ivan

changeName('Hi there!');

// console.log(userName); // Vasyl

// Skipping only the second parameter
function showOtherMessage( from = 5, to = 1) {
  // alert(`From ${from} to ${to}.`)
} 

let myFrom = undefined,
    myTo = 3;
showOtherMessage(myFrom, myTo);

// Returning the function result.
function sum(a, b) {
  if (a === 0 || b === 0) { 
    return;
   } else {
    return a + b;
   }
}

let result = sum(10, 15);
console.log(result);

// Another example.
let newAge = 18;
// newAge = prompt('Enter your age', 18);

function checkAge(newAge) {
  if(newAge >= 18) {
    return true;
  } else {
    return confirm('Do you have...?');
  }
}

if (checkAge(newAge)) {
  // alert('Access');
} else {
  // alert('Access Denied');
}

/**
 * Functional expressions
 */
let sayHello = function () {
  alert('Hello!');
}

// console.log(sayHello()); // This is the way to call this function.

// Nice short version
// let otherAge = prompt('Enter your age');
let welcome = function() {alert(otherAge < 18 ? 'Hello!' : 'Hi!')};
// welcome();

/**
 * Clean functions
 */
let i = 0;

function mySum(a, b) {
  return a + b + i;
}
console.log(mySum(1, 2)) // 3

for (; i < 3;) {
  i++;
}

console.log(sum(1,2)) // 6, because i=3 after for. 1+2+3.

/**
 * IIFE
 */
(function() {
  // alert('Text'); // Will be execcuted immediately.
})()

/**
 * Var
 */

(function() {
  // var message = 'Hi';
  message = 'Hello';
  // console.log(message); // will return any of variable declarations.
})()

// console.log(message); // will return only the declaration of variable without var.

/**
 * Arrow functions
 */

let logMessage = () => console.log('Text'),
    logMessageNext = a => console.log(a),
    caclulate = (a, b) => a + b;

// console.log(caclulate(1, 2));

/**
 * Function declaration with new Function()
 */
let sayHowdy = new Function('a', 'b', 'return a + b');
let sayYay = new Function('a,b', 'return a + b');
let sayYahoo = new Function('a , b', 'return a + b');

// console.log(sayHowdy( 1, 3));