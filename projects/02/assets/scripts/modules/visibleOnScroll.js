/**
 * Changes the appearance of menu items depending on the scroll position.
 * 
 * @param { string } sliderSelector     The class of the slider.
 */

const visibleOnScroll = ( sectionSelector, menuSelector ) => {
  window.addEventListener('scroll', () => {
    const element = document.querySelector('#projects');
    const position = element.getBoundingClientRect();

    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      console.log('Element is fully visible in screen');
    }

    // checking for partial visibility
    if(position.top < window.innerHeight && position.bottom >= 0) {
      console.log('Element is partially visible in screen');
    }
  })
}

export default visibleOnScroll;