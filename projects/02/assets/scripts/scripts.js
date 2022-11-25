// Import modules
import smoothScroll from './modules/scroll.js'
import slider from './modules/slider.js';
// import menuShowOnScroll from './modules/menuShowOnScroll';

window.addEventListener('load', () => {
  // Initialize modules
  smoothScroll( 'heroArrow', 'projects');
  slider( '.js-hero-slider');
  // menuShowOnScroll();
});