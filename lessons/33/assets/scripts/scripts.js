/**
 * Shopping cart.
 */

/**
 * Creates both lists that contain separate purchased and available products.
 */
const shoppingCartConstructor = () => {
  let purchasedProductsList = listOfPurchasedProducts(productsWarehouse()),
      availableProductsList = listOfAvailableProducts(productsWarehouse());

  // Purchased products list.
  printShoppingList('js-purchased-products', resultHtml(purchasedProductsList));

  // Available products list.
  printShoppingList('js-available-products', resultHtml(availableProductsList));
}

/**
 * Creates a single product object.
 * 
 * @param { string } productName   The name of the product.
 * @param { string } productIcon   The icon of the product for better visualization.
 * @param { integer } quantity     The quantity of the products.
 * @param { integer } productPrice   The price for 1 piece.
 * @param { boolean } purchased    If this product is already purchased or not.
 * @returns { object } newProduct.
 */
const productConstructor = ( productName, productIcon = '🙃', quantity, productPrice, purchased = false ) => {
  let newProduct = {
    product_name: productName,
    quantity: quantity,
    product_price: productPrice,
    purchased: purchased,
    icon: productIcon
  }

  newProduct.total = (newProduct.quantity * newProduct.product_price).toFixed(2);

  return newProduct;
}

/**
 * Creates the array of all the products in the store. 
 * Each product is supposed to be an object.
 * 
 * @returns { array } productsInWarehouse.
 */
const productsWarehouse = () => {
  const productsInWarehouse = [ 
    productConstructor('apple', '🍎', 5, 2.2),
    productConstructor('pear', '🍐', 3, 2.5),
    productConstructor('orange', '🍊', 6, 1.5, true),
    productConstructor('lemon', '🍋', 2, 3.5),
    productConstructor('banana', '🍌', 6, 1.9),
    productConstructor('watermelon', '🍉', 1, 2),
    productConstructor('grapes', '🍇', 3, 3.5),
    productConstructor('strawbery', '🍓', 1, 5, true),
    productConstructor('cherries', '🍒', 2, 4.5),
    productConstructor('peach', '🍑', 7, 4.5),
    productConstructor('mango', '🥭', 3, 3.4),
    productConstructor('coconut', '🥥', 5, 5.3),
    productConstructor('kivi', '🥝', 6, 2.4),
    productConstructor('melon', '🍈', 2, 2.1),
    productConstructor('pineaple', '🍍', 3, 5),
    productConstructor('brocoli', '🥦', 4, 0.8, true),
    productConstructor('tomato', '🍅', 5, 1.4),
    productConstructor('cucumber', '🥒', 2, 3.6, true),
    productConstructor('chili', '🌶', 2, 3.2),
    productConstructor('garlic', '🧄', 2, 1.5, true),
    productConstructor('onion', '🧅', 5, 0.5),
    productConstructor('carrot', '🥕', 8, 0.5),
    productConstructor('corn', '🌽', 4, 1),
    productConstructor('milk', '🥛', 1, 1.2 ),
    productConstructor('potato', '🥔', 5, 0.2, true),
    productConstructor('bagel', '🥯', 2, 2.5),
    productConstructor('croissant', '🥐', 5, 0.49, true),
    productConstructor('bread', '🍞', 2, 3.5),
    productConstructor('chease', '🧀', 2, 6.7, true),
    productConstructor('egg', '🥚', 12, 0.3),
    productConstructor('bacon', '🥓', 5, 0.5),
    productConstructor('pizza', '🍕', 2, 10),
    productConstructor('waffle', '🧇', 5, 3),
    productConstructor('dumpling', '🥟', 20, 0.1),
    productConstructor('coockie', '🍪', 5, 0.2, true),
    productConstructor('chockolate', '🍫', 1, 3.3),
    productConstructor('honey', '🍯', 1, 20),
    productConstructor('donut', '🍩', 4, 1, true),
    productConstructor('peanuts', '🥜', 50, 0.05)
  ];
  
  return productsInWarehouse;
}

/**
 * Filters the array of all the products and creates a list of purchased products.
 * 
 * @param { array } listOfProducts Array of all the products.
 * @returns { array } Only the purchased products.
 */
const listOfPurchasedProducts = ( listOfProducts ) => {
  purchasedProducts = listOfProducts.filter( ( product ) => product.purchased === true );

  return purchasedProducts;
}

/**
 * Filters the array of all the products and creates a list of available products.
 * 
 * @param { array } listOfProducts Array of all the products.
 * @returns { array }  Only the available products.
 */
 const listOfAvailableProducts = ( listOfProducts ) => {
  let listOfAvailableProducts = listOfProducts.filter( ( product ) => product.purchased === false );

  return listOfAvailableProducts;
}

/**
 * Gets all the checked products and adds it's values to array.
 * 
 * @returns { array } With selected product values.
 */
 const getSelectedProducts = ( ) => {
  let allSelected = document.querySelectorAll('input[type="checkbox"]:checked'),
      selectedValues = [];

  // Sanitizing and assigning selecteed product values to array.
  Object.keys(allSelected).forEach(key => {
    if (allSelected[key] === undefined) {
      delete allSelected[key];
    } else {
      selectedValues.push(allSelected[key].value);
    }
  });

  return selectedValues;
}

/**
 * Changing parameter purchased in products list.
 * 
 * @param { array } listOfProducts Array of all the products.
 * @param { array } listOfProducts Array of all the products.
 * @param { array } listOfProducts Array of all the products.
 * @param { array } listOfProducts Array of all the products.
 * @returns { array } With selected product values.
 */
 const updatingProductStock = ( currentProducts, selectedProductsValues, updatedProductsInStock, purchased = true ) => {
  Object.keys(currentProducts).forEach(key => {
    if ( selectedProductsValues.includes( currentProducts[key].product_name ) ) {
      updatedProductsInStock.find(product => product.product_name === currentProducts[key].product_name).purchased = false;
    }
  });

  return updatedProductsInStock;
}

/**
 * Prepares the HTML responce to be published.
 * 
 * @param { array } listOfProducts An array to convert in HTML.
 * @returns { string } resultHtml The string to be published.
 */
 const resultHtml = ( listOfProducts ) => {
  let futureDomElement = `<div class="product__list-heading"><span></span><span>Product</span><span>Qty</span><span>Price</span><span>Total</span></div>`;

 listOfProducts.map( product => {
    futureDomElement += `<label class="product__label" for="${product.product_name}">`;
    futureDomElement += `<input type="checkbox"`;
    futureDomElement += ` id="${product.product_name}"`;
    futureDomElement += ` class="${product.purchased ? 'js-purchased-product' : 'js-available-product'}"`;
    futureDomElement += ` value="${product.product_name}"`;
    futureDomElement += ` name="${product.product_name}"`;
    futureDomElement += ` for="${product.product_name}"`; 
    futureDomElement += ` <span class="product__name">${product.icon} ${product.product_name.charAt(0).toUpperCase() + product.product_name.slice(1)}</span>`; 
    futureDomElement += ` <span class="product__quantity">${product.quantity}</span>`; 
    futureDomElement += ` <span class="product__price">${product.product_price}</span>`;
    futureDomElement += ` <span class="product__total">${product.total}</span>`; 
    futureDomElement += `</label>`;        
  });

  // listOfAvailableProducts = listOfProducts.filter( ( value ) => value.purchased === false );

  return futureDomElement;
}

/**
 * Prints the result.
 * 
 * @param { string } selector Selector class to input the result into.
 * @param { string } result The string that we want to show.
 *
 */
function printShoppingList ( selector, result ) {
  let listLocation = document.getElementsByClassName(selector);

  for (let i = 0; i < listLocation.length; i++) {
    listLocation[i].innerHTML = result;
    listLocation[i].style.visibility = 'visible';
  }
}

let updatedProductsInStock = [];

document.querySelector('#removeFromPurchased').addEventListener('click', () => {
  let allProductsInStock = productsWarehouse();

  // If this is first iteration assign the generated list, if not, 
  // it should already have the the new list of products from the previous iteration.
  if ( updatedProductsInStock !== 'undefined' && updatedProductsInStock.length === 0 ) {
    updatedProductsInStock = allProductsInStock;
  } 

  // We need these to make sure that the checked products were removed from and added to the correct lists.
  let currentlyPurchased = listOfPurchasedProducts(updatedProductsInStock),
      currentlyAvailable = listOfAvailableProducts(updatedProductsInStock),
      updatedPurchasedHtml = '',
      updatedAvailableHtml = '';

  // All selected elements and their values.
  let selectedValues = getSelectedProducts();

  // TODO: move to separate function.
  // Step 3. Set value false to the purchased key in product object if it is selected.
  Object.keys(currentlyPurchased).forEach(key => {
    if ( selectedValues.includes( currentlyPurchased[key].product_name ) ) {
      updatedProductsInStock.find(product => product.product_name === currentlyPurchased[key].product_name).purchased = false;
    }
  });

  updatedPurchasedHtml = listOfPurchasedProducts( updatedProductsInStock );
  updatedAvailableHtml = listOfAvailableProducts( updatedProductsInStock );

  printShoppingList('js-purchased-products', resultHtml( updatedPurchasedHtml ));
  printShoppingList('js-available-products', resultHtml( updatedAvailableHtml ));
});


// Inint the function and construct the first load of product.
shoppingCartConstructor();


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