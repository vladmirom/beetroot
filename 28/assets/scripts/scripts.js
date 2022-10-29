/**
 * Medium tasks
 */

// Asking the name of the user
document.querySelector('#nameBtn').addEventListener('click', getUserName);

function getUserName() {
  let userName = prompt("Please tell us your name.");
  alert (`Hi, ${userName}! Welcome aboard!`);
}

// Asking the age of the user
document.querySelector('#ageBtn').addEventListener('click', getUserAge);
const currentYear = 2022;
const myAge = 33; // fun part :)

function getUserAge( ) {
  let userName = prompt("Please tell us your birth year.");
  let useArage = currentYear - userName;
  let message;

  if ( useArage > myAge ) {
    message = `Oh My God! You are so old, ${useArage} is not a joke! Take care of your self!`;
  } else if ( useArage == myAge ) {
    message = `This is a perfect age. Remember that Christ died at ${useArage}. Enjoy your life!`;
  } else if ( useArage < myAge && 0 > myAge ) {
    message = `Ah, you are so young. At ${useArage} you have so many things to learn and experience for the first time. I'm little jelous.`;
  } else {
    message = `Seems that someone is sneaky and tells me the wrong date. Are you even born?`;
  }

  let ageQuestionReply = document.getElementById("userAgeReply");
  ageQuestionReply.innerHTML = message;
}

// Asking the side of quadrangle
document.querySelector('#qLengthBtn').addEventListener('click', getQuadrangleSideLength);

function getQuadrangleSideLength( ) {
  let qSideLength = prompt("What is the length of the quadrangle's side in meters?");
  let qSideArea = qSideLength ** 2;
  let message = `The area of that building is ${qSideArea} meters.`;

  let qQuestionReply = document.getElementById("qLengthReply");
  qQuestionReply.innerHTML = message;
}

/**
 * Difficult tasks
 */

// Asking the radius of circle
document.querySelector('#cRadiusBtn').addEventListener('click', getCircleRadius);

function getCircleRadius( ) {
  let cRadius = prompt("What is the radius of the circle in meters?");
  const piNumber = 3.14159265;
  let cArea = piNumber * (cRadius ** 2);
  let cAreaRounded = Math.round(cArea);
  let message = `The area of that building is ${cAreaRounded} meters.`;

  let qQuestionReply = document.getElementById("cRadiusReply");
  qQuestionReply.innerHTML = message;
}

// Asking the distance between cities and time in route.
document.querySelector('#speedBtn').addEventListener('click', getKmPerHour);

function getKmPerHour( ) {
  let distance = document.getElementById('speedCalculationDistance').value;
  let time = document.getElementById('speedCalculationTime').value;

  let kmPerHour = distance / time;
  let speedRounded = Math.round(kmPerHour);
  let message = `If you plan to travel ${distance} kilometers in ${time} hours, you should be traveling around ${speedRounded} kilometers per hour.`;

  console.log(message);

  let qQuestionReply = document.getElementById("kmPerHourReply");
  qQuestionReply.innerHTML = message;
}

// Converting USD to Eur.
document.querySelector('#convertBtn').addEventListener('click', convertUsdEuro);

function convertUsdEuro( ) {
  let usd = prompt("Add your amount of USD.");
  let convertionRate = 1.0036;

  let eur = usd * convertionRate;
  let eurRounded = Math.round(eur);
  let message = `If you exchange &#36;${usd} to €, you will receive <strong>${eurRounded}€<strong>.`;

  let qQuestionReply = document.getElementById("convertReply");
  qQuestionReply.innerHTML = message;
}