const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

// keyup is when you press and then let go it will be fired up 

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    // when you press enter everthing in box will be gone ' '  and wait 10 mini seconds
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        // calling the random select function
        randomSelect()
    }
})


function createTags(input) {
    // using split to make a array of what is entered in the text area trim will trim off any white space if its not equal to an empty string 
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    // clear beacuse if not itll pile up 
    tagsEl.innerHTML = ''

    
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// ----------------------------------------------
function randomSelect() {
    // this represents the number of time the tages will be highlighted befor something is chosen 
    const times = 30

    // highlight and the remove of highlight will repeat so we need an interval 
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// funtions since it can be done multiple times
function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

// line 8 have a eventlistener that has a if statement then calls a funtion creats the tag and randomly selects but it all to gther then later 

// line 23 create a tag function that creates a element which youd want to do first creat a tag when you type and comma 

// 2 youd want to randomly select which is a function that calls a function within it

