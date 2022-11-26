// Import modules
import smoothScroll from './modules/scroll.js'
import slider from './modules/slider.js';
// import menuShowOnScroll from './modules/menuShowOnScroll';
import visibleOnScroll from './modules/visibleOnScroll.js';

window.addEventListener('load', () => {
  // Initialize modules
  smoothScroll( 'heroArrow', 'projects');
  smoothScroll( 'menuProjects', 'projects');
  smoothScroll( 'menunNews', 'news');
  smoothScroll( 'menuGallery', 'gallery');
  smoothScroll( 'menuContact', 'contact');
  slider( '.js-hero-slider');
  // menuShowOnScroll();
  // visibleOnScroll();
});