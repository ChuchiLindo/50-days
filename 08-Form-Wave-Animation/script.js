const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    // inner text getting each letter
    label.innerHTML = label.innerText
    // split into an array splits the letteres into an array
        .split('')
        // manipluate turn it into an array into some thing else we want a letter with a span around it to add a transition 
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        // turn it back into a string
        .join('')
})
