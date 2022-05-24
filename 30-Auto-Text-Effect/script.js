const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'


let idx = 1
// 300 divided by the speedElement value so 1-5 
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    
    //idx incement by one
    idx++

    if(idx > text.length) {
        idx = 1
    }
// speed is dynamic
    setTimeout(writeText, speed)
}

// this is what allows you to change the speed
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)