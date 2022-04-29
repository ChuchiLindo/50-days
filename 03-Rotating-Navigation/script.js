const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))
// buttons are not showing or working with the class that should change UPDATE IT WAS CAUSE THERE WAS A SPACE BETWEEN ROTATO AND (-70 DEG)  