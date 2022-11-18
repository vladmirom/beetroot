/**
 * Generates the progress ring.
 * 
 * @param { string } selectorClass   The class of the circle we are generating.
 * @param { integer } percentage     How much of that circle is filled.
 */

const generateProgressRing = ( selectorClass, percentage ) => {
  const circle = document.querySelector( selectorClass );
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;
  
  const setProgress = ( percent ) => {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }
  
  setProgress(percentage);  
}

// Generating progress circles.
generateProgressRing( '.js-progress-ring--1', 87 );
generateProgressRing( '.js-progress-ring--2', 94 );
generateProgressRing( '.js-progress-ring--3', 89 );