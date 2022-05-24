const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            // this is gonna get the location of the heart where it was clicked 
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

// this e pertains to the element
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // the numbers here is the number of pixels the location of a click
    const x = e.clientX
    const y = e.clientY
    // the offset is whats not the image but the white space and then we subtract it casue we want it to show with in the image not the entire veiw port 
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset
    // so now the cordinates are from the image and not the veiw port you can see it by console.log(xInside, yInside);

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
// increment times clicked and it starts at zero
    times.innerHTML = ++timesClicked

    // the heart gets added but it stays there as you can see in the console so we want to make sure that they get removed afterward after a set of time 
    setTimeout(() => heart.remove(), 1000)
}