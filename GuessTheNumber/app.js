let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")////yash se .value kar ke bhile sakte ho
const guessLot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true



if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()  
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a vlid number')
    } else if (guess < 1) {
        alert('please enter a number more then 1')
    } else if (guess > 100) {
        alert('please enter a number less than 100')
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            diplayGuess(guess);
            displayMsg(`game over, random numer was ${randomNumber}`)
            endGame()
        } else {
            diplayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`you Win the game`)
        endGame()
    } else if (guess < randomNumber) {
        displayMsg(`number is too low`)
    } else if (guess > randomNumber) {
        displayMsg(`number is too high`)
    }
}

function diplayGuess(guess) {
    userInput.value = ''
    guessLot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = ` ${12 - numGuess}`
}

function displayMsg(message) {
    lowOrHi.innerHTML = ` <h2> ${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = ` <h2 id = "newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guessLot.innerHTML = ''
        remaining.innerHTML = ` ${12 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}






