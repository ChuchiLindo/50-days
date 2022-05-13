const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // this is getting the postion of click on the whole screen 
        const x = e.clientX
        const y = e.clientY
        // gets the postion of the button it self
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // this is getting postion of only in the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // this creates the span that we hard coded before
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        // the this key word wont work with a arrow function if you use vanilla js you gotta handle eveything that you put in and how to take it out
        this.appendChild(circle)
        // this is how we move it out the dom
        setTimeout(() => circle.remove(), 500)
    })
})

// where your clicking and a position of a specific element 