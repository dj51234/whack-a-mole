const $squares = document.querySelectorAll('.square')
const $mole = document.querySelectorAll('.mole')
const $secondsLeft = document.querySelector('#seconds-left')
let $score = document.querySelector('#score') 

let currentScore = 0

function molePopOut() {
    $squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = Math.floor(Math.random() * 9)
    let position = $squares[randomSquare]
    position.classList.add('mole')
}

molePopOut()