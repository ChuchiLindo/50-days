const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
// we are runnng the function every 30 miliseconds 
let int = setInterval(blurring, 30)

function blurring() {
  load++

  // this will make it stop at 100
  if (load > 99) {
    // this is a function calling the int setInterval
    clearInterval(int)
  }
// template string to count up to a 100 this is changing html text
  loadText.innerText = `${load}%`
  // chanign style of a html element
  loadText.style.opacity = scale(load, 0, 100, 1, 0)

  // changing the filter what we had in the css we want a max blur of 30 and bring it down to 0
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

//  so this is a new const this is a function that is returning something
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}