/**
 * Generates the progress ring.
 * 
 * @param { string } selectorClass   The class of the circle we are generating.
 * @param { integer } percentage     How much of that circle is filled.
 */

 const findMovies = ( page = 1, form ) => {

}


/**
 * Generates the progress ring.
 * 
 * @param { string } selectorClass   The class of the circle we are generating.
 * @param { integer } percentage     How much of that circle is filled.
 */

const createFilmItem = ( movie ) => {
  const el = document.createElement('div'),
                  elTitle = document.createElement('h4'),
                  elYear = document.createElement('div'),
                  elButton = document.createElement('span');

  el.classList.add('film-item');
  elTitle.classList.add('film-item__title');
  elYear.classList.add('film-item__year');
  elButton.classList.add('film-item__btn');
  
  elTitle.innerHTML = movie[i].Title;
  elYear.innerHTML = movie[i].Year ?? '-';
  elButton.innerHTML = `Deetails`;

  el.append(elTitle);
  el.append(elYear);
  el.append(elButton);

  return el;
}

/**
 * Generates the progress ring.
 * 
 * @param { string } selectorClass   The class of the circle we are generating.
 * @param { integer } percentage     How much of that circle is filled.
 */

 const addListenerToPaginationItems = ( totalResults ) => {
  const ulItems = document.querySelectorAAll('#search-pagination li');

  if (ulItems.length === 0) {
    return;
  }

  ulItems.forEach(item => {
    item.addEventListener( 'click',  )
  });
  return el;
}

/**
 * Generates the progress ring.
 * 
 * @param { string } selectorClass   The class of the circle we are generating.
 * @param { integer } percentage     How much of that circle is filled.
 */

 const showMovieDetails = () => {
  
}

/**
 * Generates the progress ring.
 * 
 * @param { string } selectorClass   The class of the circle we are generating.
 * @param { integer } percentage     How much of that circle is filled.
 */

 const addListenerToDetailsButton = () => {

}

/**
 * Generates the progress ring.
 * 
 * @param { string } selectorClass   The class of the circle we are generating.
 * @param { integer } percentage     How much of that circle is filled.
 */

 const createPagination = ( totalResults ) => {
  const ul = document.getElementById('search-pagination');

  if (!ul) {
    return;
  }

  ul.innerHtml = '';

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const el = document.createElement();
  }

  return el;
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');

  if ( form ) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      findMovies

      const titleField = e.target.querySelector('input[type=search]'),
            typeeField = e.target.querySelector('select[name=type]');

      if ( titleField.value.length === 0 ) {
        return;
      }

      axios({
        url: e.tagret.action,
        method: e.target.method,
        params: {
          s: titleField.value,
          type: titleField.value,
          page: 1
        },
        responceType: 'json'
      })
      .them((res) => {
        const resultsBlock = document.getElementById('search-results');

        if ( resultsBlock ) {
          if ( res.data.Error ) {
            resultsBlock.innerHTML = res.data.Error
          } else if ( res.data.Search && res.data.totalResults ) {
            for (let i = 0; i < res.data.Search.length; i++) {
              resultsBlock.append(createFilmItem(res.data.Search[i]));
            }

            createPagination( res.data.totalResults );
            addListenerToPaginationItems();
            addListenerToDetailsButton();
          }
        }
      })
      .catch(() => console.log('Error!'))
    })
  }

})