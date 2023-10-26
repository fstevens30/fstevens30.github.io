const NEWLINE = '<br>'
const BLANK = ''

function clear () {
    document.body.innerHTML = BLANK
}

function print (newText) {
    document.body.innerHTML += newText
}