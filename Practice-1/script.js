// ---------STICKY NAV-------------------------
window.onscroll = function () {
    myFunction();
}

// get the header all that you want to be sticky 
const header = document.getElementById("header")

// get the offset positon of everything
const sticky = header.offsetTop

// this is the functionthat is called when scrolled
function myFunction() {
    if (window.pageYOffset  > sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
  }

// ---------------FAQ SECTION--------------------
const toggles = document.querySelectorAll('.faq-toggle')

// function toggles ()=> {} its not even a function a foreach loop is used here to loop through node list i belive 

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})

// IMPORTANT the PARENTNODE in this case is the faq which where you want the active class on or off

//  classList property and how you can use the provided methods to manipulate the class names of an HTML element

// Bring in toggle buttons (querySelectorAll)
// Loop through nodelist (forEach)
// Add click event (addEventListerns)
// Toggle the active class on the parent node (.parentNode & classList.toggle())