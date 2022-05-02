
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main');
console.log(mainEl)

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)';


// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';


// Task 1.3
// Add a class of flex-ctr to mainEl.

// Hint: Element.classList API

mainEl.className = "flex-ctr";

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

// const topMenuEl = document.querySelector('#top-menu');
const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);

// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = '100%';

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
// Add a class of flex-around to topMenuEl.

topMenuEl.className = "flex-around";


// Task 3.0 (at top)

// Copy the following data structure to the top of script.js:

// Menu data structure
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.


menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });