/**
 * Smooth scroll.
 */

let button = document.getElementById('button');

if (button) {
  button.addEventListener('click', scrollToElementFunc);
}

function scrollToElementFunc() {
  let hiddenEl = document.querySelector('.hidden-el');

  if (hiddenEl) {
    hiddenEl.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      alignToTop: true
    })

    // block: start, center, end
    // inline: start, center, end
  }
}

/**
 * jQuery.
 */

$('.selector-1').addClass('selector-2');

$('#myButton').click(function() {
  console.log('clicked');
  $('li').hide(900);
}); 

$(document).ready(function() {
  // do something
})

$('#myButton2').click(fade); 

function fade() {
  console.log('click');
  $('li').fadeToggle('slow');
}

/**
 * Slick slider.
 */

$('.custom-slider').slick({
  infinite: true
});

/**
 * Swiper slider.
 */

 const swiper = new Swiper('.my-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});