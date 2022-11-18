/**
 * DOM.
 */

/* Working with window */
// console.log(window);
// console.log(window.document);

// console.log(window.document.location.href); // https://www.something.com
// console.log(window.document.location.hash); // anchors
// console.log(window.document.location.search); // queries ?=

// console.log(window.document.body); // => <body></body>
// console.log(document.body); // => ^ the same
// console.log(window.document.head); // <head></head>
// console.log(document.head); // ^ the same

// console.log(document);

// console.log( window.navigator ); // Gives the info about browser
// console.log( window.navigator.userAgent );
// console.log( window.navigator.platform ); // => Windows, Linux, Mac
// console.log( window.navigator.location ); // => url, hashes, queries

// console.log(window.innerHeight); // => the height of the the window (of the content area).
// console.log(window.innerWidth); // => the width of the window (of the content area).

// console.log(window.outerHeight); // => the height of the the window (together with console and browser line).
// console.log(window.outerWidth); // => the width of the window (together with console, etc).

// console.log(document.body.childNodes[0]); // can work with it as with array.

/* Searching for elements */
// console.log(document.body.childNodes[0]); // Can find the element, but not in common use.

// getElementById()
// let elementById = document.getElementById('practicing'); // finds element by id and returns the the part of html.
// let errorGetElementById = elementById.getElementById('heading'); // => Will return error, because method getElementById() works only with doument.

// let div1 = document.getElementById('div1'),
//     div2 = document.getElementById('div2');

// Need to check if element exists, before working with it.
// if(div1) {
  // console.log(div1);
// }

// querySeelectorAll()
// let queryAllDivs = document.querySeelectorAll('div'); // => all div elements from the document.
// let queryAllId = document.querySeelectorAll('#div1'); // => all div elements with id div1. Not recommended to use because it's slower than getElementById().
// let queryAllClass = document.querySeelectorAll('.section.section--big-spacces'); // => all section elements with these classes section.section--big-spacces.
// let queryAllLinks = document.querySeelectorAll('ul > li > a'); // => all a elements that are within ul li.
// let querySeveralChecks = document.querySeelectorAll('ul > li > a, #div1'); // => all a elements that are within ul li and all div elements with id div1 will be added into 1 variable.

// let queryList = document.getElementById('list'),
//     queryLinks = queryList.querySeelectorAll('li'),
//     linksArray = Array.from(queryLinks); // lets us to assign methods to elements then.


// querySeelector() - finds only the first element in the structure. Leess memory demanding than querySeelectorAll().
// let oneLink = querySeelector('link'); // => returns the first element found.

// Getters.
let getById = document.getElementById('span'), // => returns one span.
    getTag = document.getElementsByTagName('a'), // => returns link.
    getList = document.getElementsByClassName('list'), // => returns list.
    getCheckbox = document.getElementsByName('checkbox'); // => returns checkbox element.

/* Moving up and down the DOM */
// Finding the father. Goes up the DOM structure and finds the matching element.
// let father = getCheckbox.closest('.list');

let next = getTag.nextElementSibling;
let previous = getTag.previousElementSibling;

/* Changing DOM */
// Manipulating with content.
getById.innerHtml // Returns the content of the tag element.
getById.outerHtml // Returns the content of the tag element and the tag itself.

// getById.innerHtml = `My super span`. // Adds the text.
// getById.outerHtml = `<p>It was span here before.</p>`// Replaces <span></span> and the content inside of it to the given string.

// Manipulating with classes
getById.classList.contains('my-class'); // Checks if class my-class is in that element. => false
getById.classList.add('my-class'); // Adds class my-class to that element.
getById.classList.remove('my-class'); // Removes class my-class to that element.
getById.classList.toggle('my-class'); // Checks if class exists and adds/removes class my-class to that element.

// Creating elements
let futureDomElement = document.createElement('div'),
    list = document.getElementById('list'),
    firstLi = list.querySelector('li'),
    lastLi = Array.from(list.querySelectorAll('li'));

futureDomElement.id = 'elements-id';
futureDomElement.classList.add('elements-class', 'elements-class-2');
futureDomElement.innerHtml = `Our new element.`;

// list.insertBefore(futureDomElement, firstLi);

// Adding elements
// sectionBig.append(`string to add`, futureDomElement);

console.log(firstLi);