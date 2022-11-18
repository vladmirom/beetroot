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

/**
 * Swiper slider.
 */
// Icons for slider.
const farcryIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H32C14.3 64 0 78.3 0 96V208c0 17.7 14.3 32 32 32H42c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352H321.4c23.7 0 44.8-14.9 52.7-37.2L400.9 240H432c8.5 0 16.6-3.4 22.6-9.4L477.3 208H544c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H528V56zM321.4 304H229l16-64h105l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`;
const godOfWarIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.7 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"/></svg>`;
const horizonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>`;

// Slider itself.
 const swiper = new Swiper('.js-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let bullet = '';
      if (index === 0) {
        bullet = `<div class="${className}">`;
        bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--green">${farcryIcon}</div>`;
        bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--green">Far Cry</p>`;
        bullet += `</div>`;
      } else if ( index === 1 ) {
        bullet = `<div class="${className}">`;
        bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--green">${godOfWarIcon}</div>`;
        bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--green">God of War</p>`;
        bullet += `</div>`;
      } else if ( index === 2 ) {
        bullet = `<div class="${className}">`;
        bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--green">${horizonIcon}</div>`;
        bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--green">Horizon</p>`;
        bullet += `</div>`;
      } 
      
      return bullet;
    },
  },
  breakpoints: {
    480: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          let bullet = '';
          if (index === 0) {
            bullet = `<div class="${className}">`;
            bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--yellow">${farcryIcon}</div>`;
            bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--yellow">Far Cry</p>`;
            bullet += `</div>`;
          } else if ( index === 1 ) {
            bullet = `<div class="${className}">`;
            bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--yellow">${godOfWarIcon}</div>`;
            bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--yellow">God of War</p>`;
            bullet += `</div>`;
          } else if ( index === 2 ) {
            bullet = `<div class="${className}">`;
            bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--yellow">${horizonIcon}</div>`;
            bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--yellow">Horizon</p>`;
            bullet += `</div>`;
          } 
          
          return bullet;
        }
      }
    },
    912: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          let bullet = '';
          if (index === 0) {
            bullet = `<div class="${className}">`;
            bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--white">${farcryIcon}</div>`;
            bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--white">Far Cry</p>`;
            bullet += `</div>`;
          } else if ( index === 1 ) {
            bullet = `<div class="${className}">`;
            bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--white">${godOfWarIcon}</div>`;
            bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--white">God of War</p>`;
            bullet += `</div>`;
          } else if ( index === 2 ) {
            bullet = `<div class="${className}">`;
            bullet += `<div class="swiper-pagination-bullet__icon swiper-pagination-bullet__icon--white">${horizonIcon}</div>`;
            bullet += `<p class="swiper-pagination-bullet__text swiper-pagination-bullet__text--white">Horizon</p>`;
            bullet += `</div>`;
          } 
          
          return bullet;
        }
      }
    }
  }

});