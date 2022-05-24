const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

// array
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

// array the types are the colors that itll change to 
const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    // we make the getRandomType with function down below
    // this type is what will make the colors change
    notif.classList.add(type ? type : getRandomType())
    // we make the getRandomType with function down below
    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)
    // this is the time before it dissapears 
    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
