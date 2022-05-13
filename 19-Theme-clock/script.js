const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

// we want to make a couple of arrays one for days and one for months

const days =  ["Sunday" , "Monday" ,  "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
const months = [ "Jan", "Feb" ,"Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

// before we handle anything with the time and date we can do the dark mode which is simpler 

// attempt at doing dark mode toggle 
// toggle.addEventListener('click' , darkMode );

// function darkMode() {
//     toggle.classList.add('.dark')
// }

toggle.addEventListener('click' , (e) => {
    const html = document.querySelector('html')
    
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innterHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innterHTML = 'Light mode'
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    // making it a 12 hour clock not a 24 our clock which you can do too 
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

  // we have to make whats in the rotate (dynamic and have the clock hands roatate with the time) using the scale function
  //  hourEl.style.transform = `translate(-50%, -100%) rotate(   )`

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)` 
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)