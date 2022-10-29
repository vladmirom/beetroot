/**
 * Medium tasks
 */

 console.log('hi');
 
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