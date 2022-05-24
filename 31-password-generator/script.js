const resultEl = document.getElementById('result')
// length user inputs
const lengthEl = document.getElementById('length')
// the 4 check boxes
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
// generate and the clipboard
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
// use this object and give every function a key
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
//---------------------------------------------------
clipboardEl.addEventListener('click', () => {
    //where is this textarea element that we created
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }
//??????????????????
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    //what did this remove???
    textarea.remove()
    alert('Password copied to clipboard!')
})
// ---------------------------------------------------------------------------------------------
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    // the check will tell us if its checked and give back to use true or false
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
// console.log(hasLower, hasUpper. hasNumber, hasSymbol) will return true or false
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    //console.log(typeArr) retruns objects
    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}
// ---------- RandomFunctions-------------------------
function getRandomLower() {
    // math.floor rounds down 1+ 91 = 98 
    // the 26 multiply by the higher random ??? 26 letters??
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// function getRandomLower() {
//     return String.fromCharCode(97)
//     console.log(getRandomLower) this is going to retrun a lowercase a 
// }

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// 10 numbers
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    // since you wanna use a certain set of symbols
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}