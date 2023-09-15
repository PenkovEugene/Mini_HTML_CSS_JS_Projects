const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop-game')
const repeatButton = document.querySelector('#repeat')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['greenyellow', 'rgb(178, 67, 215)', 'rgb(215, 77, 67)', 'white', 'rgb(195, 215, 67)', 'rgb(67, 123, 215)']

let score = 0
let time = 0

startButton.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

stopButton.addEventListener('click', (event) => {
    event.preventDefault()
    finishGame()
})

repeatButton.addEventListener('click', (event) => {
    window.location.reload()
    /* Alternative Code
    // event.preventDefault()
    // screens[0].classList = 'screen'
    // screens[1].classList = 'screen'
    // score = 0
    // time = 0
    // timeEl.parentNode.classList = 'hide'
    // board.remove(`<h1>Cчёт : <span class="primary">${score}</span></h1>`)
    // startButton.addEventListener('click', (event) => {
    //     event.preventDefault()
    //     screens[0].classList.add('up')
    // })
    // timeList.addEventListener('click', event => {
    //     if (event.target.classList.contains('time-button')) {
    //        time = parseInt(event.target.getAttribute('data-time'))
    //        screens[1].classList.add('up')
    //         startGame()
    //     }
    // }) */
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-button')) {
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {

        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
    
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчёт : <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const circleColor = setColor(circle)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    circle.style.background = circleColor
    
    
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}