//////////////////////////////////////////////////////////////////////////////////////
// Global variables

const body = document.body;
const menu = document.querySelector('.menu');
const menuToggleButtons = document.querySelectorAll('.button--menu-toggle');
const menuCloseButton = document.querySelector('.button--menu-close');
const dropdownLinks = document.querySelectorAll('.dropdown_body_content_item a');

//////////////////////////////////////////////////////////////////////////////////////
// Functions

// Get the scroll position
const getScrollPosition = () => {
  return window.pageYOffset | document.body.scrollTop;
}

// Get specified parent of element
const getParent = (element, index) => {
    while(index > 0) {
        element = element.parentNode;
        index--;
    }
    
  return element;
}

// Animate header
const headerAnimation = () => {
  const header = document.querySelector('.header');
  const scrollPosition = getScrollPosition();

  if(scrollPosition > 50) {
    header.setAttribute('data-background', 'true');
  }
  else {
    header.setAttribute('data-background', 'false');
  }
}

// Toggle menu
const toggleMenu = () => {
  body.setAttribute('data-overflow-y', body.getAttribute('data-overflow-y') === 'hidden' ? 'scroll' : 'hidden');
  menu.setAttribute('data-state', menu.getAttribute('data-state') === 'active' ? 'disabled' : 'active');
}

// Close menu
const closeMenu = () => {
  body.setAttribute('data-overflow-y', 'scroll');
  menu.setAttribute('data-state', 'disabled');
}

//////////////////////////////////////////////////////////////////////////////////////
// Listeners

// Dom content loaded
window.addEventListener('DOMContentLoaded', () => {
  menu.setAttribute('data-ready', 'true');
});

// Window scroll
window.addEventListener('scroll', headerAnimation);

// Menu toggle buttons
menuToggleButtons.forEach((menuToggleButton) => {
  menuToggleButton.addEventListener('click', toggleMenu);
});

// Menu close button
menuCloseButton.addEventListener('click', closeMenu);

// Freeze dropdown focus
dropdownLinks.forEach((dropdownLink) => {
  // Get the third parent of dropdown link
  const parentContainer = getParent(dropdownLink, 4);
  
  // Add attribute to parent when focus in
  dropdownLink.addEventListener('focusin', () => {
    // console.log(`Focus IN - to ${dropdownLink.innerHTML}`);
    parentContainer.setAttribute('data-focus', 'true');
  });
  
  // Remove attribute from parent when focus out
  dropdownLink.addEventListener('focusout', () => {    
    // console.log(`Focus OUT - from ${dropdownLink.innerHTML}`);
    parentContainer.setAttribute('data-focus', 'false');
  });
});