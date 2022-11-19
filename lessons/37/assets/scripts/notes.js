/**
 * Ajax.
 */

// Old and the easiest method.
const loadPage = () => {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', '../pages/index.html');
  xhr.send();

  xhr.onreadystatechange = () => {
    console.log(xhr);
    if (xhr.readyState === 3) { // from 0 to 4
      console.log('Loading...');
    }

    if (xhr.readyState === 4) { // from 0 to 4
      xhr.response;
    }
  }
}

loadPage();