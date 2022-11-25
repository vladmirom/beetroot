/**
 * Initializes the slider with the class.
 * 
 * @param { string } sliderSelector     The class of the slider.
 */

const slider = ( sliderSelector ) => {
  const swiper = new Swiper(sliderSelector, {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1,
    centeredSlides: true,
    direction: 'vertical',
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
}

export default slider;