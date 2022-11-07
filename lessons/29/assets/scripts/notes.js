let string = '4',
    num = 5;

// alert( string = num );

'02' > 1; // true
true == 1; // true
true === 1; // false, because it compares the type

let num1 = true,
    num2 = false;

num1 || num2; // returns the initial value of the true operant. 
num1 && num2; // returns the initial value of the false operant. 

!'12345' // false
!'qqqqq' // false
!'' // true because '' = false, and reversed to it is true.

let a = 'A',
    b = null,
    c;

console.log(c || b || a); // returns the first true or the last value if not found.
console.log(a ?? b ?? c); // if a is not null (which is b) or underfined (which is c), returns a, else b.