
/**
 * Increment and decrement.
 */
let counter = 1;
console.log(counter++, 'counter++'); // Postfix increment. First we receive the value, then add. Result 1.
console.log(++counter, '++counter'); // Prefix increment. First we add, then receive the value. Result 3.

let counter1 = 2,
    counter2 = 2;
console.log(2 * ++counter1, '2 * ++counter1'); // Result 6. 2 * 3
console.log(2 * counter2++, '2 * counter2++'); // Result 4. 2 * 2

let counter3 = 'a'; 
console.log(counter3++, 'string with increment'); // NaN

let counter4 = '1',
    counter5 = '2';
console.log(2 * ++counter4, '2 * ++counter4 as number in a string'); // Result 4. 2 * 2
console.log(2 * counter5++, '2 * counter5++ as number in a string'); // Result 4. 2 * 2

/**
 * Conditional statements.
 */
let i1 = 1,
    i2 = 2,
    i3 = 3;
if (i1 === i2) { // Checks the value and the type of variable
  console.log('statement is true');
} else {
  console.log('statement is false');
}

// let year = prompt('Enter your year: ');
if (year > 0 && year > 2022) {
  console.log(123);
} else if (year == 1000) {
  console.log('Current');
} else {
  console.log(321);
}

// Ternary operators
let age = +prompt('Enter your age'),
    accessAllowed,
    accessAllowedText;

// if (age >= 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

accessAllowed = age >= 18 ? true : false; // The same but with ternary.
accessAllowed = age >= 18; // Since this check would anyway return true/false, it's better to write it this way.
console.log(accessAllowed, 'classic ternary');

// if (age >= 18) {
//   accessAllowed = 'Text 1';
// } else if (age === 18) {
//   accessAllowedText = 'Text 2';
// } else {
//   accessAllowed = 'Text 3';
// }

accessAllowed = age >= 18 ? 'Text 1' : 
  age === 18 ? 'Text 2' : 'Text 3'; // The same but with ternary.
console.log(accessAllowed, 'Double ternary');

/**
 * Loops.
 */
// Classic For loop
for (let i = 0; 3 < i; i++) {
  console.log(i);
}

// For loop with outside variables and break.
let index = 0,
    sum = 0;

for (; index < 5;) {
  if (sum >= 2) {
    break; // stops the loop
  }

  sum = sum + index;
  console.log(sum);
}

// For loop in for loop
let num = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    num = num + j;
  }
}

console.log(num);

// While loop
let a = 3;
while (a) {
  console.log(a);
  a--;
}

// Do while loop
let i = 3;
do {
  console.log(123);
  i++;
} while (i < 3)