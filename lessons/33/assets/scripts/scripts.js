/**
 * Shopping cart.
 */

const shoppingCartConstructor = () => {
  // stuff goes here :)
}

const addProductToShoppingList = ( product ) => {

}

const productConstructor = ( productName, productIcon = '🙃', purchased = false ) => {
  let newProduct = {
    product_name: productName,
    quantity: Math.floor(Math.random() * 5) + 1,
    product_price: Math.floor(Math.random() * 20) + 1,
    purchased: purchased,
    icon: productIcon
  }

  newProduct.total = newProduct.quantity * newProduct.product_price;

  return newProduct;
}

const randomProductToAskUser = ( alreadyPicked ) => {
  let randomProduct = '';

  const randomProductsList = [ 
    productConstructor('green apple', '🍏', true),
    productConstructor('red apple', '🍎'),
    productConstructor('pear', '🍐'),
    productConstructor('orange', '🍊', true),
    productConstructor('lemon', '🍋'),
    productConstructor('banana', '🍌'),
    productConstructor('watermelon', '🍉'),
    productConstructor('grapes', '🍇'),
    productConstructor('strawbery', '🍓', true),
    productConstructor('cherries', '🍒'),
    productConstructor('peach', '🍑'),
    productConstructor('mango', '🥭'),
    productConstructor('coconut', '🥥'),
    productConstructor('kivi', '🥝'),
    productConstructor('melon', '🍈'),
    productConstructor('pineaple', '🍍'),
    productConstructor('brocoli', '🥦', true),
    productConstructor('tomato', '🍅'),
    productConstructor('cucumber', '🥒', true),
    productConstructor('chili', '🌶'),
    productConstructor('garlic', '🧄', true),
    productConstructor('onion', '🧅'),
    productConstructor('carrot', '🥕'),
    productConstructor('corn', '🌽'),
    productConstructor('milk', '🥛'),
    productConstructor('potato', '🥔', true),
    productConstructor('bagel', '🥯'),
    productConstructor('croissant', '🥐', true),
    productConstructor('bread', '🍞'),
    productConstructor('chease', '🧀', true),
    productConstructor('egg', '🥚'),
    productConstructor('bacon', '🥓'),
    productConstructor('pizza', '🍕'),
    productConstructor('waffle', '🧇'),
    productConstructor('dumpling', '🥟'),
    productConstructor('coockie', '🍪', true),
    productConstructor('chockolate', '🍫'),
    productConstructor('honey', '🍯'),
    productConstructor('donut', '🍩', true),
    productConstructor('peanuts', '🥜')
  ];

  console.log(randomProductsList);

  // Removing products that we already selected from randomProductsList.
  let uniqueRandomProductsList = randomProductsList.filter( ( product ) => !alreadyPicked.includes( product ) );

  // Assing a randomProduct and return it. 
  randomProduct = uniqueRandomProductsList[Math.floor(Math.random() * uniqueRandomProductsList.length)];
  
  return randomProduct;
}

const addProductOrNot = ( product ) => {

}

randomProductToAskUser(['red apple', 'pear', 'orange']);

// Old stuff below, remove when finished.
// let car = {
//   brand: 'Toyota',
//   model: 'C-HR',
//   year: 2022,
//   type: 'Hybrid',
//   fuel_type: 'Gasoline',
//   engine: 1.8,
//   power: '122 hp',
//   'consumption per 100km in liters': 4.8,
//   'acceleration to 100km': 11,
//   tank_size_l: 50,
//   average_speed: 90,
//   driver: 'Volodymyr'
// }

// function showCarSpecs( car ) {
//   let carSpecs = document.getElementById("carSpecs"),
//       carKeys = Object.keys(car),
//       carTechnicalInfo = ``;

//   if (carKeys.length > 0) {
//     carTechnicalInfo = `<ul>`;
//       for (let key of carKeys) {
//         carTechnicalInfo += `<li>${key}: ${car[key]}</li>`;
//       }
//     carTechnicalInfo += `</ul>`;
//   }

//   carSpecs.innerHTML = carTechnicalInfo;
// }

// document.addEventListener('DOMContentLoaded', showCarSpecs( car ));


// document.querySelector('#ageBtn').addEventListener('click', getUserAge);

// function getUserAge() {
//   let userReply = prompt("What is your age?");

//   if ( userReply < 0 ) {
//     message = `The age you wrote, seems to be incorrect. Please, give me the real number.`;
//   } else if ( userReply >= 0 && userReply <= 11 ) {
//     message = `Ah, you are so young, kid!`;
//   } else if ( userReply >= 12 && userReply <= 17 ) {
//     message = `Your age is great for exploging things. Being a tenager is one of the best things in the world. Enjoy it!`;
//   } else if ( userReply >= 18 && userReply <= 59 ) {
//     message = `Perfect age! Remember to balance your work life and the rest when you are adult.`;
//   } else if ( userReply > 60 ) {
//     message = `You are retired person and going to die soon, get ready!`;
//   }

//   let ageReply = document.getElementById("ageReply");
//   ageReply.innerHTML = message;
// }

// // Asing for a keyboard number
// document.querySelector('#keyboardNumber').addEventListener('change', getRangeNumber);

// function getRangeNumber() {
//   let rangeNumber = +document.getElementById('keyboardNumber').value,
//       message;

//       console.log(typeof rangeNumber);

//   switch(rangeNumber) {
//     case 0:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#41;</strong>.`
//       break;

//     case 1:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#161;</strong> Nah, joking, it is <strong>&#33;</strong>`
//       break;

//     case 2:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#64;</strong>.`
//       break;

//     case 3:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#35;</strong>.`
//       break;

//     case 4:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#36;</strong>.`
//       break;

//     case 5:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#37;</strong>.`
//       break;

//     case 6:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#94;</strong>.`
//       break;

//     case 7:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#38;</strong>.`
//       break;

//     case 8:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#42;</strong>.`
//       break;

//     case 9:
//       message = `Your symbol of ${rangeNumber} keyboard is <strong>&#40;</strong>.`
//       break;

//     default:
//       message = `Can't find the symbol of ${rangeNumber}.`
//   }

//   let keyboardNumberResult = document.getElementById("keyboardNumberResult");
//   keyboardNumberResult.innerHTML = message;
//   keyboardNumberResult.style.visibility = 'visible';
// }

// // Calculating the sum of the range of two numbers.
// document.querySelector('#rangeBtn').addEventListener('click', calculateRangeSum);

// function calculateRangeSum() {
//   let numberOne = +document.getElementById('firstNumber').value,
//       numberTwo = +document.getElementById('secondNumber').value,
//       result = Number();

//   for (let i = numberOne; i <= numberTwo; i++) {
//     result += i;
//   }

//   message = `The summ of all numbers in the range between (and including) ${numberOne} and ${numberTwo} equals <strong>${result}</strong>.`

//   let rangeResult = document.getElementById("rangeResult");
//   rangeResult.innerHTML = message;
//   rangeResult.style.visibility = 'visible';
// }

// // Calculating Greatest common divider of two numbers.
// document.querySelector('#gcdBtn').addEventListener('click', calculateGcd);

// function calculateGcd() {
//   let numberOne = +document.getElementById('firstGcdNumber').value,
//       numberTwo = +document.getElementById('secondGcdNumber').value,
//       resultNumberOne = numberOne,
//       resultNumberTwo = numberTwo;

//   numberOne = Math.abs(numberOne);
//   numberTwo = Math.abs(numberTwo);


//   while( numberTwo ) {
//     let divider = numberTwo;
//     numberTwo = numberOne % numberTwo;
//     numberOne = divider;
//   }

//   message = `Greatest common divider of two ${resultNumberOne} and ${resultNumberTwo} equals <strong>${numberOne}</strong>.`

//   let gcdResult = document.getElementById("gcdResult");
//   gcdResult.innerHTML = message;
//   gcdResult.style.visibility = 'visible';
// }

// // Calculating all dividers from a given number.
// document.querySelector('#dividersBtn').addEventListener('click', calculateDividers);

// function calculateDividers() {
//   let numberToTest = +document.getElementById('dividersNumber').value,
//       i = numberToTest,
//       divider = '',
//       result = '';

//   numberToTest = Math.abs(numberToTest);

//   while ( i ) {

//     if ( numberToTest % i === 0 ) {
//       divider = i === numberToTest ? i : i + ', ';
//       result = result.replace (/^/, divider); // I want it to be in ascending order. 
//     }
  
//     i--;
//   }

//   message = `All dividers of ${numberToTest} number are: <strong>${result}</strong>.`

//   let dividersResult = document.getElementById("dividersResult");
//   dividersResult.innerHTML = message;
//   dividersResult.style.visibility = 'visible';
// }

// /**
//  * Medium tasks
//  */

// // Asking for number and checking if it is palindrome.
// document.querySelector('#palindromeBtn').addEventListener('click', checkPalindrome);

// function checkPalindrome() {
//   let number = +prompt("Saippuakivikauppias - is Finnish word for soapstone dealer, and it is a plaindrome - can be read both ways the same. Give us your 5 or more digits number and we will check if it a palindrome."),
//       numberLength = number.toString().length,
//       numberReversed = reverseNumber(number);

//   if ( numberLength >= 5 ) {
//     if ( number === numberReversed) {
//       message = `The ${number} is palindrome.`;
//     } else {
//       message = `The ${number} is <strong> not a palindrome</strong>.`;
//     }
//   } else {
//     message = `The ${number} is less than 5 digits. Please, enter the correct number.`;
//   }

//   let palindromeResult = document.getElementById("palindromeResult");
//   palindromeResult.innerHTML = message;
//   palindromeResult.style.visibility = 'visible';
// }

// function reverseNumber(num) {
//   return (
//     parseFloat(
//       num
//         .toString()
//         .split('')
//         .reverse()
//         .join('')
//     ) * Math.sign(num)
//   )                 
// }

// // Calculation of total with discount
// document.querySelector('#discountBtn').addEventListener('click', calculateTotal);

// function calculateTotal() {
//   let price = +prompt("Enter your number, please."),
//       message = '';

//   switch(true) {
//     case price >= 200 && price < 300:
//       total = price * 0.97; // 97%
//       message = `You get the 3% discount 🎉. The total is <strong>${total}</strong>.`
//       break;

//     case price >= 300 && price < 500:
//       total = price * 0.95; // 95%
//       message = `You get the 5% discount 🤩. The total is <strong>${total}</strong>.`
//       break;

//     case price >= 500:
//       total = price * 0.93; // 93%
//       message = `You get the 7% discount 🔥. The total is <strong>${total}</strong>.`
//       break;

//     default:
//       message = `Unfortunately, no discount for you. The minimum discount of 3% is applied for the price starting from 200.`
//   }

//   let discountResult = document.getElementById("discountResult");
//   discountResult.innerHTML = message;
//   discountResult.style.visibility = 'visible';
// }

// // Calculation of 10 numbers
// document.querySelector('#numbersBtn').addEventListener('click', calculateTenNumbers);

// function calculateTenNumbers() {
//   let numbersString = prompt("Enter your numbers, separated by coma sign."),
//       numbersStringNoSpaces = numbersString.replaceAll(' ', ''),
//       numbersArray = numbersStringNoSpaces.split(','); // Getting an array of substrings.

//   let posititveNumbersCount = 0,
//       negativeNumbersCount = 0,
//       zerosCount = 0,
//       evenNumbersCount = 0,
//       oddNumbersCount = 0,
//       numbersCount = 0,
//       isNanCount = 0,
//       message = '';

//   numbersArray.map(string => {
//     number = parseInt(string);

//     if ( !isNaN(number) ) {
//       numbersCount++; // Checking the total of all numbers entered.

//       if (Math.sign(number) === 1) { // Checking positive natural.
//         posititveNumbersCount++ 
//       } else if (Math.sign(number) === -1) { // Checking negative natural.
//         negativeNumbersCount++;
//       } else if (Math.sign(number) === 1 || Math.sign(number) === -0) {  // Checking zero.
//         zerosCount++; 
//       };

//       if(number % 2 == 0) {  // Checking even number.
//         evenNumbersCount++;
//       } else {  // Else === odd number.
//         oddNumbersCount++;
//       }

//     } else {
//       isNanCount++;
//     }
//   });

//   if (isNanCount) {
//     if (numbersCount) {
//       message = `Even though, the entered numbers were not all numbers (<strong>${isNanCount}</strong>), we managed to check <strong>${numbersCount}</strong> of them. `;
      
//       if (posititveNumbersCount) {
//         message += `There ${posititveNumbersCount > 1 ? 'were': 'was'} <strong>${posititveNumbersCount}</strong> positive real number${posititveNumbersCount > 1 ? 's': ''}. `
//       } else {
//         message += `There were no positive real numbers. `
//       }

//       if (negativeNumbersCount) {
//         message += `There ${negativeNumbersCount > 1 ? 'were': 'was'} <strong>${negativeNumbersCount}</strong> negative real numbers${negativeNumbersCount > 1 ? 's': ''}. `
//       } else {
//         message += `There were no negative real numbers. `
//       }

//       if (zerosCount) {
//         message += `There ${zerosCount > 1 ? 'were': 'was'} <strong>${zerosCount}</strong> zero${zerosCount > 1 ? 's': ''}. `
//       } else {
//         message += `There were no zeros. `
//       }

//       if (evenNumbersCount) {
//         message += `There ${evenNumbersCount > 1 ? 'were': 'was'} <strong>${evenNumbersCount}</strong> even number${evenNumbersCount > 1 ? 's': ''}. `
//       } else {
//         message += `There were no even numbers. `
//       }

//       if (zerosCount) {
//         message += `There ${oddNumbersCount > 1 ? 'were': 'was'} <strong>${oddNumbersCount}</strong> odd number${oddNumbersCount > 1 ? 's': ''}. `
//       } else {
//         message += `There were no odd numbers. `
//       }

//     } else {
//       message = `We didn't find any numbers in your string.`
//     }
//   } else {
//     message = `Among your ${numbersCount} numbers we managed to find something. `;
      
//     if (posititveNumbersCount) {
//       message += `There ${posititveNumbersCount > 1 ? 'were': 'was'} <strong>${posititveNumbersCount}</strong> positive real number${posititveNumbersCount > 1 ? 's': ''}. `
//     } else {
//       message += `There were no positive real numbers. `
//     }

//     if (negativeNumbersCount) {
//       message += `There ${negativeNumbersCount > 1 ? 'were': 'was'} <strong>${negativeNumbersCount}</strong> negative real numbers${negativeNumbersCount > 1 ? 's': ''}. `
//     } else {
//       message += `There were no negative real numbers. `
//     }

//     if (zerosCount) {
//       message += `There ${zerosCount > 1 ? 'were': 'was'} <strong>${zerosCount}</strong> zero${zerosCount > 1 ? 's': ''}. `
//     } else {
//       message += `There were no zeros. `
//     }

//     if (evenNumbersCount) {
//       message += `There ${evenNumbersCount > 1 ? 'were': 'was'} <strong>${evenNumbersCount}</strong> even number${evenNumbersCount > 1 ? 's': ''}. `
//     } else {
//       message += `There were no even numbers. `
//     }

//     if (zerosCount) {
//       message += `There ${oddNumbersCount > 1 ? 'were': 'was'} <strong>${oddNumbersCount}</strong> odd number${oddNumbersCount > 1 ? 's': ''}. `
//     } else {
//       message += `There were no odd numbers. `
//     }
//   }

//   let numbersResult = document.getElementById("numbersResult");
//   numbersResult.innerHTML = message;
//   numbersResult.style.visibility = 'visible';
// }

// // Calculating days of week
// document.addEventListener('DOMContentLoaded', showToday);

// function showToday() {
//   console.log(defineTheDay(new Date().getDay()));
//   let daySwitchResult = document.getElementById("daySwitchResult"),
//       today = defineTheDay(new Date().getDay()),
//       message = `Today is <strong>${today}</strong>. Do you want to see the other day? Press the button.`
//       daySwitchResult.innerHTML = message;
// }

// document.querySelector('#daySwitchBtn').addEventListener('click', switchTheDay);
// let day = new Date().getDay(); // Current day

// function switchTheDay() {
//   if (day === 7) {
//     day = 1;
//   } else {
//     day++;
//   }

//   let nextDay = defineTheDay(day);

//   let daySwitchResult = document.getElementById("daySwitchResult"),
//       message = `The day is <strong>${nextDay}</strong>. Do you want to see the other day? Press the button.`;
//       daySwitchResult.innerHTML = message;
// }

// function defineTheDay(i) {
//   let dayOfTheWeek = '';
  
//   switch( true ) {
//     case i === 1:
//       dayOfTheWeek = 'Monday';
//       break;

//     case i === 2:
//       dayOfTheWeek = 'Tuesday';
//       break;

//     case i === 3:
//       dayOfTheWeek = 'Wednesday';
//       break;
    
//     case i === 4:
//       dayOfTheWeek = 'Thursday';
//       break;

//     case i === 5:
//       dayOfTheWeek = 'Friday';
//       break;

//     case i === 6:
//       dayOfTheWeek = 'Saturday';
//       break;

//     case i === 7:
//       dayOfTheWeek = 'Sunday';
//       break;
//   }

//   return dayOfTheWeek;
// }

// /**
//  * Difficult tasks
//  */

// // Calculating the deposit investment.
// document.querySelector('#depositBtn').addEventListener('click', calculateDeposit);

// function calculateDeposit( ) {
//   let cash = prompt("How much do you want to put on deposit?"),
//       depositTime = prompt("How many month do you want to keep your money on deposit?")
//       depositPerccentage = 0.05, // It's for easier calculation 
//       monthInAYear = 12;

//   let yearlyIncome = cash * depositPerccentage; // only percentage, without the deposit itself
//   let mothlyIncome = yearlyIncome / monthInAYear;
//   let depositPercentageIncome = Number.parseFloat(mothlyIncome * depositTime).toFixed(2);
//   let fullIncome = Number(cash) + Number(depositPercentageIncome);
//   let message = `If you invest ${cash}€ to the bank deposit for ${depositTime} month, you will receive <strong>${depositPercentageIncome}€</strong> as a percentage income, or <strong>${fullIncome}€</strong> as the whole summ.`;

//   let depositReply = document.getElementById("depositReply");
//   depositReply.innerHTML = message;
// }