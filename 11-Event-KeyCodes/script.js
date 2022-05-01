const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})

// here is a keyboard event and when you log the event to the console you will see that for each key youll get a bunch of properties and we want to use some of them  the event.key event.keyCode and event.code

// window.addEventListener('keydown', (event) => { 

//   console.log(event)
// })

// here we would want a simple check to see if a key value is a string such as when you press the space keythe key comes out as " "

//${event.key === ' ' ? 'Space' : event.key} 

// using a template literal 
// ${event.code}

// could be useful if your building something like a game 