/**
 * Allows the element to scroll smoothly.
 * 
 * @param { string } buttonID           The id of the button.
 * @param { string } elementToScroll    The id of the element we scroll to.
 */
const smoothScroll = ( buttonID, elementToScroll ) => {
  const scrollToElement = ( elementToScroll ) => {
    let hiddenEl = document.querySelector('#' + elementToScroll);
  
    if (hiddenEl) {
      hiddenEl.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        alignToTop: true
      })
    }
  }

  const buttonSelector = document.getElementById(buttonID);
  if (buttonSelector) {
    buttonSelector.addEventListener('click', ( scrollEvent ) => {  scrollEvent.preventDefault(); scrollToElement( elementToScroll ) }); // Q2: is there a better way to write this?
  }
};

export default smoothScroll;