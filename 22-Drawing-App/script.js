const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
// x and y are the position of the mouse
let x
let y
// --------------------------------------------------------
// getting the position of mouse when clicked down 
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
// these offsets are to get the cordinates of a element 
    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})
// ---------------------------------------------------------

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
// it keeps draming circles but when you move really fast youll see the cirlces which is where well draw a line
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    // line width and circle radius are different sizes
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// ----------------------------------------------------
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})
// -------------------------------------------------------
// will get you the color that you pick 
colorEl.addEventListener('change', (e) => color = e.target.value)
// clear button
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))