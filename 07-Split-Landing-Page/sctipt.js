const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
// ----------------------------------
// mouseenter
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// mouseleave
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// ----------------------------------
// mouseenter
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// mouseleave
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))