/**
 * Working with cookies.
 */

const deleteCookie = (name) => {
  setCookie(name, "", 0);
}

const setCookie = (name, value, days) => {
  let expires = '';

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000)) // Value * days*minutes*seconds*miliseconds
    expires = '; expires=' + date.toUTCString();
  } else {
    expires = '; expires=Thu, 01 Jan 1900 00:00:01 GTM';
  }

  document.cookie = name+'='+value+expires+'; path=/';
}

// Getting the value of cookie by name.
const getCookie = (name) => {
  let cookieValue = document.cookie.split(';'),
      nameTemplate = name + '=';

  for (let index = 0; index < cookieValue.length; index++) {
    let cookieValueItem = cookieValue[index];
    while (cookieValue[index].charAt(0) === ' ') {
      cookieValueItem = cookieValueItem.substring(1, cookieValue.length)
    }

    // Option 1.
    let splittedValue = cookieValueItem.split('=');

    // if ( splittedValue[0] === name ) {
    //   return splittedValue[1];
    // }

    // Option 2.
    if (cookieValue.indexOf(nameTemplate) === 0) {
      return cookieValueItem.substring(nameTemplate.length, cookieValueItem.length);
    }
  }

  return null;
}

// setCookie('test', '123', 3);
// deleteCookie('test');
// getCookie('test');
// getCookie('test');

/**
 * Working with Local Storage.
 */

// Setting.
localStorage.setItem('test', '123'); 

// Getting.
let localStorageValue = localStorage.getItem('test');

// Removing.
// delete localStorage.test;
// localStorage.removeItem('test');

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key[i];
  
}

// console.log(localStorageValue);

/**
 * Working with Session Storage.
 */
// Setting.
sessionStorage.setItem('test', '123'); 

// Getting.
let sessionStorageValue = sessionStorage.getItem('test');

// Removing.
// delete sessionStorage.test;
// sessionStorage.removeItem('test');

// console.log(sessionStorageValue);