const $startBtn = document.querySelector('.start-btn')
const $squares = document.querySelectorAll('.square')
const $mole = document.querySelectorAll('.mole')
const $secondsLeft = document.querySelector('#seconds-left')
const $score = document.querySelector('#score') 


$startBtn.addEventListener('click', event => {
    let currentScore = 0
    let currentTime = 60
    let interval
    let targetId

    $secondsLeft.textContent = currentTime 
    $score.textContent = currentScore

    function molePopOut() {
        $squares.forEach(square => {
            square.classList.remove('mole')
        })
        let randomSquare = Math.floor(Math.random() * 9)
        let popUpPosition = $squares[randomSquare]
        popUpPosition.classList.add('mole')
        targetId = popUpPosition.id
    }

    $squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.id === targetId) {
                currentScore += 1
                $score.textContent = currentScore 
            }
        })  
    })

    function randomSquare() {
        interval = setInterval(molePopOut,1000)
    }

    function removeSecond() {
        currentTime--
        $secondsLeft.textContent = currentTime 
        if (currentTime === 0) {
            clearInterval(interval)
            clearInterval(timer)
            alert(`Your final score is: ${currentScore}`)
        }
    }

    randomSquare()
    let timer = setInterval(removeSecond,1000)
        
})
