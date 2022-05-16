const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

// check scroll point console.log(window.scrolly,nav.offsetheight)
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}