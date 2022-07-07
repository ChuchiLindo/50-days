const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  // what it to go down by 2 each time
  const blurValue = 20 - length * 2
//   .filter ???
  background.style.filter = `blur(${blurValue}px)`
})

