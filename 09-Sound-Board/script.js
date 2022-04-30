// made an array of the sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        // when something is playing it will stop before playing the next one 
        stopSongs()

        // when you click it will play sound so with html 5 we have a js api with the method play() for audio elements
        document.getElementById(sound).play() 
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        // there isnt actully a stop but there is a pause pause is like the play method
        song.pause()
        // audio tages have a proptery of current time 
        song.currentTime = 0;
    })
}

// using audio | createElement and appendChild