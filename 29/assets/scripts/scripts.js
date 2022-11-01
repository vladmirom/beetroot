/**
 * Medium tasks
 */

// Fixing floating point error.
let firstCalculation = (0.1 + 0.2).toFixed(1);
document.getElementById("floatingPointErrorResultOne").innerHTML = firstCalculation;

let secondCalculation = (0.1 * 10 + 0.2 * 10) / 10;
document.getElementById("floatingPointErrorResultTwo").innerHTML = secondCalculation;


// Calculation of string and integer
let myString = '1',
    myInteger = 2;

let thirdCalculation = myString + myInteger; // Normal concatenation.
let fourthdCalculation = Number(myString) + myString; // First convert into int, then add.
let fifthCalculation = parseInt(myString, 10) + myString; // First convert into int, then add.

document.getElementById("integerAndStringResultOne").innerHTML = thirdCalculation;
document.getElementById("integerAndStringResultTwo").innerHTML = fourthdCalculation;
document.getElementById("integerAndStringResultThree").innerHTML = fifthCalculation;

// Asking the side of quadrangle
document.querySelector('#flashDriveBtn').addEventListener('click', getFlashDriveCapacity);

function getFlashDriveCapacity( ) {
  let flashSize = prompt("What is the size of your flash drive in GB?");
  let flashSizeInMB = flashSize * 1000;
  let fileSize = 820;
  let numberOfFiles =  Math.round(flashSizeInMB / fileSize);
  
  const flashDriveStandardSizes = [64, 128, 256, 512];
  let message = `Huh? What size is this, I can't reognize this.`;

  if ( flashSize < 64 ) {
    message = `Pfff, do you call this a flash drive? You can hardly fit in just ${numberOfFiles} files! Pathetic!`;
  } else if ( flashSize >= 64 && flashSize < 128 ) {
    message = `Meh. Not that big, but could contain ${numberOfFiles} files.`;
  } else if ( flashSize >= 128 && flashSize < 256 ) {
    message = `Oh, wow, that's a decent size already! ${numberOfFiles} files will fit in easily!`;
  } else if ( flashSize >= 256 && flashSize < 512 ) {
    message = `Wooow, that's quite a lot to take. Do you have enough of files, because this little baby can fit in ${numberOfFiles} of them.`;
  } else if ( flashSize > 512 ) {
    message = `Duude, wait, are you from the planet Earth? We don't have such cool technologies here. You can upload ${numberOfFiles} files into this masterpiece. Where did you get it from? 👽`;
  }

  let flashDriveCapacityReply = document.getElementById("flashDriveResult");
  flashDriveCapacityReply.innerHTML = message;
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