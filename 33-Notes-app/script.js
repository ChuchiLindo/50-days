const addBtn = document.getElementById('add')
// we want it parsed as an array
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    //------------------------------------------------------------- 
    // getting note from const note above which is why its note.querySelector
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    // here we use the marked library by wraping text in the marked
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()
        //this is one place youd want to update
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)
         //this is one place youd want to update
        updateLS()
    })
// we want to add the note to the DOM to the body it will add
    document.body.appendChild(note)
}

// update local storage
function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    //this is where its gonna get stored in an array | the arry is what you want to store in local storage 
    const notes = []

    notesText.forEach(note => notes.push(note.value))
    //this is why we add stringify cuz thats what it saves
    localStorage.setItem('notes', JSON.stringify(notes))
}
//localStoarage.setitem , getItem, removeItem it stores strings 


//The setItem() method sets the value of the specified Storage Object item.
//The setItem() method belongs to the Storage Object, which can be either a localStorage object or a sessionStorage object.

// localStorage.setItem(keyname, value)

//can add a clearns node btn to clear everything since everything will stay there untill you delete it with the trash btn  