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

// Calculating the sum of the range of numbers.
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

/**
 * Medium tasks
 */

// Asking user for cash to buy chockolates.
document.querySelector('#cashBtn').addEventListener('click', getMoneyForChocolate);
const wonkaBarPrice = 5.5;

function getMoneyForChocolate( ) {
  let cash = prompt("How much money do you have with you?"),
      numberOfWonkaBars = cash / wonkaBarPrice,
      change = cash % wonkaBarPrice,
      message,
      giphy,
      willyWonkaGiphy = document.getElementById("willyWonkaGiphy"),
      willyWonkaReply = document.getElementById("willyWonkaReply");

  if ( isNaN(cash) ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/Muu7f65jjgIAAAAC/morgan-freeman-you-sneaky-thing-you.gif" alt="Sneaky trickseter">`;
    message = `Ah you sneacky trickster, ${cash} is not a cash! We can't buy anything with it!`;
  } else if ( numberOfWonkaBars < 1 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/SKRcWlLOJWoAAAAC/wallet-broke.gif" alt="Wallet Broke GIF - Wallet Broke Poor GIFs">`;
    message = `No money, no honey. We can't buy anything with ${cash}€! The prices are insane!`;
  } else if ( numberOfWonkaBars >= 1 && numberOfWonkaBars < 2 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/53jKY28Sm44AAAAd/violet-beauregarde-karate-girl.gif" alt="Wallet Broke GIF - Wallet Broke Poor GIFs">`;
    message = `We have enough just for one Wonka Bar. Let's be fit like Violet Beauregarde!`;
  } else if ( numberOfWonkaBars > 1 && numberOfWonkaBars < 5 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/hDI8fRd1lvoAAAAC/gamer-game.gif" alt="Gamer Telekuk GIF - Gamer Game Telekuk GIFs">`;
    message = `${Math.round(numberOfWonkaBars)} is not enough bars! I understand that we have ${change}€ left, but we can't buy more.`;
  } else if ( numberOfWonkaBars >= 5 && numberOfWonkaBars <= 10 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/lgA-GrnDeJ4AAAAd/charlie-and-the-chocolate-factory-chocolate.gif" alt="Charlie And The Chocolate Factory Chocolate GIF - Charlie And The Chocolate Factory Chocolate Golden Ticket GIFs">`;
    message = `You do love chocolate, you can buy ${Math.round(numberOfWonkaBars)} bars, and you will have ${change}€ left from your ${cash}.`;
  } else if ( numberOfWonkaBars > 10 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/jJDjKz_KjO4AAAAC/willy-wonka-and-the-chocolate-factory-veruca-salt.gif" alt="Charlie And The Chocolate Factory ">`;
    message = `Rich... You don't have to rub into our faces that you can buy ${Math.round(numberOfWonkaBars)} bars, and I'm sure that you don't care of ${change}€ change.`;
  }

  willyWonkaGiphy.innerHTML = giphy;
  willyWonkaReply.innerHTML = message;
}

// Reverse number
document.querySelector('#reverseBtn').addEventListener('click', reverseNumber);

function reverseMethodOne(num) {
  let rev = 0;
  let lastDigit;

  while(num != 0){
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num/10);
  }

  return (
    rev
  )                 
}

function reverseMethodTwo(num) {
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

function reverseNumber( ) {
  let integerToReverse = prompt("What number do you want to reverse?"),
      methodOne = reverseMethodOne(integerToReverse),
      methodtwo = reverseMethodTwo(integerToReverse),
      reverseReplyOne = document.getElementById("reverseReplyOne"),
      reverseReplyTwo = document.getElementById("reverseReplyTwo");

  reverseReplyOne.innerHTML = methodOne;
  reverseReplyTwo.innerHTML = methodtwo;
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