/**
 * Ajax. Old and the easiest method.
 */
const loadPageByOldMethod = () => {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', '../pages/index.html');
  xhr.send();

  xhr.onreadystatechange = () => {
    let content = document.getElementById('content');

    if (xhr.readyState === 3) { // from 0 to 4
      console.log('Loading...');
    }

    if (xhr.readyState === 4) { // from 0 to 4
      if(xhr.status === 404) {
        content.innerHTML = "Not found"
      } else {
        content.innerHTML = xhr.response;
      }
    }
  }
}

/**
 * Ajax. Newer method - fetch.
 */
const loadPageByNewerMethod = () => {
  fetch('../pages/index.html')
  // First .then when checks what type of data comes back (.text(), .json()).
  // This specific example tells that first .then is not ok, then skip second .then and proceed to .catch that will show the custom error.
  // .then(res => {
  //   if(!res.ok) {
  //     throw Error(res.statusText)
  //   }

  //   return res.text()
  // })

  // First .then when checks what type of data comes back (.text(), .json()). 
  // This specific example tells that first.then is ok, then proceed to the second .then.
  .then(res => res.text()) // Needs to check what type of data comes back (.text(), .json()).
  
  // Second .then when we do something with the data that we receive from the first .then. Works only if first .then is ok.s
  .then(data => {
    let content = document.getElementById('content');
    content.innerHTML = data;
  })

  // If there's an error, this example will return the standard error.
  .catch(error => console.log(error))

  // If there's an error, this example will return the custom error. Will work only if the first .then check fails (!ok) and skips the second .then.
  // .catch(() => {
  //   let content = document.getElementById('content');
  //   content.innerHTML = 'Custom error message';
  // })

  // Works in both success and error.
  .finally(() => {
    content.innerHTML = 'Not found'
  })
}

/**
 * Ajax. Newest method - AXIOS.
 * https://axios-http.com/docs/intro
 */
 const loadPageByNewestMethod = () => {
  axios('../pages/index.html')
  .then(res => {
    let content = document.getElementById('content');
    console.log();
    content.innerHTML = res.data;
  })
  .catch(() => {
    content.innerHTML = 'Not found'
  })
  .finally(() => {
    // Works in both success and error.
    content.innerHTML = 'Not found'
  })
}

/**
 * Ajax. jQuery 💩.
 * https://api.jquery.com/category/ajax/
 * 
 * NOTE: Different jQuery versions have different syntax.
 */
const loadPageByJqueryNewVersion = () => {
  // Easy version.
  // $.ajax('../pages/index.html')

  // Version with more parameters.
  $.ajax({
    url: '../pages/index.html',
    beforeSend: () => { // Show spiner
      $('#loader').show();
    },
    complete: () => { // Hide spiner
      $('#loader').hide();
   }
  })
  .done(( data ) => {
    $('#content').html(data);
  })
  .fail(() => {
    $('#content').html('New version of jQuery Error!');
  })
  .always(() => {
    console.log('Complete!');
  })
}

const loadPageByJqueryOldVersion = () => {
  // Easy version.
  // $.ajax('../pages/index.html')

  // Version with more parameters.
  $.ajax({
    url: '../pages/index.html',
    beforeSend: () => { // Show spiner
      $('#loader').show();
    },
    success: () => {
      $('#content').html(data);
    },
    error: () => {
      $('#content').html('Old version of jQuery Error!');
    },
    complete: () => { // Hide spiner
      $('#loader').hide();
    }
  })
}

const loadPageByJqueryShortVersion = () => {
  // $.post( '../pages/index.html', responce = $('#content').html(responce));
  $.get( '../pages/index.html', responce => $('#content').html(responce));
};


/**
 * Ajax. With Json.
 */
const workingWithJson = () => {
  let xhr = new XMLHttpRequest,
      requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

  xhr.open('GET', requestURL);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onreadystatechange = () => {
    let content = document.getElementById('content');

    if (xhr.readyState === 3) { // from 0 to 4
      console.log('Loading...');
    }

    if (xhr.readyState === 4) { // from 0 to 4
      if(xhr.status === 404) {
        content.innerHTML = "Not found"
      } else {
        content.innerHTML = xhr.response.homeTown;
        console.log(xhr.response);

        let jsonString = JSON.stringify(xhr.response),
            stringJson = JSON.parse(jsonString);
        console.log(stringJson);
      }
    }
  }
}

/**
 * Ajax. SPA - Single Page Application.
 * 
 * TODO: create 2 pages and work with them without reloading.
 */

 const loadSPA = ( url ) => {
  axios( url )
    .then(res => {
      let content = document.getElementById('content');
      content.innerHTML = res.data;
    })

  document.addEventListener('DOMContentLoaded', () => {
    axios({
      url: '../assets/scripts/menu.json',
      responseType: 'json'
    })
      .then(res => {
        let menu = document.getElementById('menu'),
            str = '';

        for (let i = 0; i < res.data.length; i++) {
          let li = document.createElement('li');
          li.innerHTML = `<a class="menu_link" href="${res.data[i].url}">
                          ${res.data[i].name}</a>`;
                          str += li;
          // TODO: Add this to str and then, outside the loop to menu.
          menu.append(li);           
        }
      })

      let links = document.querySelectorAll('.menu_link');
      if (links.length) {
        loadSPA(links[0].getAttribute('href'));

        for (let i = 0; i < links.length; i++) {
          links[i].addEventListener('click', ( event ) => {
            event.preventDefault();
  
            loadSPA( event.target.href );
          })
        }
      }
  })
 };

// loadPageByOldMethod();
// loadPageByNewerMethod();
// loadPageByNewestMethod();
// loadPageByJqueryNewVersion();
// loadPageByJqueryShortVersion();
// workingWithJson();
loadSPA( '../pages/index.html' );