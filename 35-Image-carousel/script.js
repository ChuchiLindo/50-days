// we want to do two things 
//1 it will automaticlly change pictures 
//2 we can use the buttons to change the pictures

const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')
// img.length is 4  | 0123
let idx = 0
// setInterval takes a function and how often you want to run the function
//so setInterval is going to run the run function ever 2000 miliseconds which is two minetes
let interval = setInterval(run, 2000)

function run() {
    idx++
    // to change the image
    changeImage()
}

function changeImage() {
    // check if its at the beginning or at the end
    // if its greater than 3 then go back to 0
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }
// here is where we are dynamicallying canging the translate
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    // clears the current interval
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    // if you click the btn the interval is still runing so thats why we need to reset the interval
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})