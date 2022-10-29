console.log('Hello word!', 1)

let userName = "Maria";
// var userAge = 16;
const userAge = 16;

console.log( userName, 'First name');

// Redeclaring variables (should redeclare without let):
userName = "Denis";

console.log( userName, userAge);
console.log( userName, 'Second name');
console.log( userAge, 'age');

// We can create empty variables and then redeclare them.
let tea;

tea = 'Earl Grey';
console.log(tea);

// Nice shortcut of declaring through coma.
let uName = 'Maria',
    uAge = 16,
    userCity = 'Kyiv',
    userPhone = '+3';

console.log(uName, uAge, userCity, userPhone);


/**
 * Basic functions
 */

// alert('Hello!');
// alert('World!');

// let someName = prompt('Enter yout name', 'Vladimir');
// console.log(someName);

// let userOk = confirm('Are you ok?');
// console.log(userOk);

/**
 * Data types
 */

const infinityDataType = 1 / 0;
console.log(infinityDataType, 'Infinity data type');

const minusInfinityDataType = -1 / 0;
console.log(minusInfinityDataType, '-Infinity data type');

const notANumber = NaN;
console.log(notANumber + 1, 'NaN');
console.log(notANumber + 10 * 3, 'Another NaN');

const str = "Maria",
      str2 = 'a',
      str3 = `Hello ${str}`,
      str4 = `Hello ${ 1 + 1}`;
console.log(str4);     

const bool = true,
      bool2 = false;
console.log(bool, 'Boolean data type');   

const nullable = null;
console.log(nullable, 'Null data type');   
 
const notDefined = undefined;
console.log(notDefined, 'Underfined data type');   

console.log(typeof('Vladimir'));
console.log(typeof null);

/**
 * Math
 */

let number1 = 1,
    number2 = 2,
    number3 = '3';

console.log(number1 + number2); // 3
console.log(number1 + number3); // 13

let message = `Hello ${number1}`; // They will glue up.
let otherMessage = 'Hello' + ' ' + number1; // The same here.

console.log(message); // Hello 1
console.log(otherMessage); // Hello 1

// Степені.
console.log(number2 ** 3); // result: 8

// Remainder(Modulo) - остача від ділення.
console.log(5 % 2); // result: 1

// Math in js
let number = -1.1;
let numberTwo = 5.6;

console.log(Math.ceil(number));
console.log(Math.round(numberTwo));
