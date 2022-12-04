/**
 * Initializes the slider with the class.
 * 
 * @param { string } sliderSelector     The class of the slider.
 * @param { object } sliderArguments    Slider settings.
 */

const slider = ( sliderSelector, sliderArguments ) => {
  let swiper = {};
  swiper = new Swiper( sliderSelector, sliderArguments );
}

const sliderConstructor = () => {
  // Slider constants
  const heroSlider = {
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
  };

  const newsSlider = {};

  slider( '.js-hero-slider', heroSlider );
  slider( '.js-news-slider', newsSlider );
}

export default sliderConstructor;