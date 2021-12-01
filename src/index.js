import './less/index.less'

// Your code goes here!
const headerblue = document.getElementsByClassName('logo-heading')

headerblue[0].addEventListener('click', event => {
    headerblue[0].style.background = 'blue'
    setTimeout(function() {
        headerblue[0].style.color = "";
    }, 500);
})

const navlinks = document.querySelectorAll('.nav-link')

//protected function before colorchange otherwise colorchange executes immediately
//I think how callback being passed
navlinks.forEach(Element => Element.addEventListener('mouseover', () => colorchange(Element)))

function colorchange(link){
    console.log('link hover over')
    link.style.color = 'pink'
}

//Selecting stuff and hitting copy will print out a message intro tag will deliver alert
const copy = document.querySelector('.intro')

copy.addEventListener('copy', event => {
    const selection = document.getSelection()    
    alert(`You copied ${selection}`)
})

//Trying to drag a image out
const img = document.querySelector('.content-destination img')
img.addEventListener('dragstart', event => {
    alert(`What are you doing with my pictures`)
})

//Notification on Page being loaded
window.addEventListener('load', (event) => {
    alert('page is fully loaded');
});


//Window size adjustment alert
window.addEventListener('resize', event => {
    if(window.innerHeight <= 500 || window.innerWidth <= 800){
    alert(`The window size is at ${window.innerHeight} by ${window.innerWidth}`)
    }
})


//Scrolling Across the window
const logoHeading = document.querySelector('.logo-heading');
let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener('scroll', function() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      logoHeading.innerHTML = `${lastKnownScrollPosition}`;
      console.log(`${lastKnownScrollPosition}`)
      ticking = false;
    });

    ticking = true;
  }
});


//Selecting Items in DOM
const input = document.querySelector('#input');
input.addEventListener('select', onSelect);
function onSelect(event) {
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  logoHeading.innerHTML = `You selected: ${selection}`;
}