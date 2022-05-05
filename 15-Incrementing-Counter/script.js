const counters = document.querySelectorAll('.counter')


counters.forEach(counter => {
    // we put this in the inner text
    counter.innerText = '0'

    const updateCounter = () => {
        // we want target which is in the data target attribure | target is a string type and the value of 12000 5000 7500 | change it to a number by adding a pluse sign  
        const target = +counter.getAttribute('data-target')

        // now we want to get the inner text
        const c = +counter.innerText

        // how much we want to increment by 200 could be anyting you want
        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // we need to keep calling update counter
            // waits 1 miliseconds
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

// getAttribute mat.ceil will round up to whole number