/**
 * Minimum tasks
 */

// Checking user's age.
document.querySelector('#ageBtn').addEventListener('click', getUserAge);

function getUserAge( ) {
  let userReply = prompt("What is your age?");

  if ( userReply < 0 ) {
    message = `The age you wrote, seems to be incorrect. Please, give me the real number.`;
  } else if ( userReply >= 0 && userReply <= 11 ) {
    message = `Ah, you are so young, kid!`;
  } else if ( userReply >= 12 && userReply <= 17 ) {
    message = `Your age is great for exploging things. Being a tenager is one of the best things in the world. Enjoy it!`;
  } else if ( userReply >= 18 && userReply <= 59 ) {
    message = `Perfect age! Remember to balance your work life and the rest when you are adult.`;
  } else if ( userReply > 60 ) {
    message = `You are retired person and going to die soon, get ready!`;
  }

  let ageReply = document.getElementById("ageReply");
  ageReply.innerHTML = message;
}

// Asing for a keyboard number
document.querySelector('#keyboardNumber').addEventListener('change', getRangeNumber);

function getRangeNumber( ) {
  let rangeNumber = +document.getElementById('keyboardNumber').value,
      message;

      console.log(typeof rangeNumber);

  switch(rangeNumber) {
    case 0:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#41;</strong>.`
      break;

    case 1:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#161;</strong> Nah, joking, it is <strong>&#33;</strong>`
      break;

    case 2:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#64;</strong>.`
      break;

    case 3:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#35;</strong>.`
      break;

    case 4:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#36;</strong>.`
      break;

    case 5:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#37;</strong>.`
      break;

    case 6:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#94;</strong>.`
      break;

    case 7:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#38;</strong>.`
      break;

    case 8:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#42;</strong>.`
      break;

    case 9:
      message = `Your symbol of ${rangeNumber} keyboard is <strong>&#40;</strong>.`
      break;

    default:
      message = `Can't find the symbol of ${rangeNumber}.`
  }

  let keyboardNumberResult = document.getElementById("keyboardNumberResult");
  keyboardNumberResult.innerHTML = message;
  keyboardNumberResult.style.visibility = 'visible';
}

// Calculating the sum of the range of two numbers.
document.querySelector('#rangeBtn').addEventListener('click', calculateRangeSum);

function calculateRangeSum( ) {
  let numberOne = +document.getElementById('firstNumber').value,
      numberTwo = +document.getElementById('secondNumber').value,
      result = Number();

  for (let i = numberOne; i <= numberTwo; i++) {
    result += i;
  }

  message = `The summ of all numbers in the range between (and including) ${numberOne} and ${numberTwo} equals <strong>${result}</strong>.`

  let rangeResult = document.getElementById("rangeResult");
  rangeResult.innerHTML = message;
  rangeResult.style.visibility = 'visible';
}

// Calculating Greatest common divider of two numbers.
document.querySelector('#gcdBtn').addEventListener('click', calculateGcd);

function calculateGcd( ) {
  let numberOne = +document.getElementById('firstGcdNumber').value,
      numberTwo = +document.getElementById('secondGcdNumber').value,
      resultNumberOne = numberOne,
      resultNumberTwo = numberTwo;

  numberOne = Math.abs(numberOne);
  numberTwo = Math.abs(numberTwo);


  while( numberTwo ) {
    let divider = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = divider;
  }

  message = `Greatest common divider of two ${resultNumberOne} and ${resultNumberTwo} equals <strong>${numberOne}</strong>.`

  let gcdResult = document.getElementById("gcdResult");
  gcdResult.innerHTML = message;
  gcdResult.style.visibility = 'visible';
}

// Calculating all dividers from a given number.
document.querySelector('#dividersBtn').addEventListener('click', calculateDividers);

function calculateDividers( ) {
  let numberToTest = +document.getElementById('dividersNumber').value,
      i = numberToTest,
      divider = '',
      result = '';

  numberToTest = Math.abs(numberToTest);

  while ( i ) {

    if ( numberToTest % i === 0 ) {
      divider = i === numberToTest ? i : i + ', ';
      result = result.replace (/^/, divider); // I want it to be in ascending order. 
    }
  
    i--;
  }

  message = `All dividers of ${numberToTest} number are: <strong>${result}</strong>.`

  let dividersResult = document.getElementById("dividersResult");
  dividersResult.innerHTML = message;
  dividersResult.style.visibility = 'visible';
}

/**
 * Medium tasks
 */

// Asking for number and checking if it is palindrome.
document.querySelector('#palindromeBtn').addEventListener('click', checkPalindrome);

function checkPalindrome() {
  let number = +prompt("Saippuakivikauppias - is Finnish word for soapstone dealer, and it is a plaindrome - can be read both ways the same. Give us your 5 or more digits number and we will check if it a palindrome."),
      numberLength = number.toString().length,
      numberReversed = reverseNumber(number);

  if ( numberLength >= 5 ) {
    if ( number === numberReversed) {
      message = `The ${number} is palindrome.`;
    } else {
      message = `The ${number} is <strong> not a palindrome</strong>.`;
    }
  } else {
    message = `The ${number} is less than 5 digits. Please, enter the correct number.`;
  }

  let palindromeResult = document.getElementById("palindromeResult");
  palindromeResult.innerHTML = message;
  palindromeResult.style.visibility = 'visible';
}

function reverseNumber(num) {
  return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )                 
}

/**
 * Difficult tasks
 */

// Calculating the deposit investment.
document.querySelector('#depositBtn').addEventListener('click', calculateDeposit);

function calculateDeposit( ) {
  let cash = prompt("How much do you want to put on deposit?"),
      depositTime = prompt("How many month do you want to keep your money on deposit?")
      depositPerccentage = 0.05, // It's for easier calculation 
      monthInAYear = 12;

  let yearlyIncome = cash * depositPerccentage; // only percentage, without the deposit itself
  let mothlyIncome = yearlyIncome / monthInAYear;
  let depositPercentageIncome = Number.parseFloat(mothlyIncome * depositTime).toFixed(2);
  let fullIncome = Number(cash) + Number(depositPercentageIncome);
  let message = `If you invest ${cash}€ to the bank deposit for ${depositTime} month, you will receive <strong>${depositPercentageIncome}€</strong> as a percentage income, or <strong>${fullIncome}€</strong> as the whole summ.`;

  let depositReply = document.getElementById("depositReply");
  depositReply.innerHTML = message;
}