const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
// check the position of each box any which can be a section or img u want on website 
checkBoxes()

function checkBoxes() {
    // what is the trigger point that we want them to come in 
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // getBoundingClientRect() this a method that shows what the size of the content is realative to the veiw port
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}