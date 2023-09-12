const board = document.querySelector('#board')
const colors = ['rgb(247, 160, 160)', 'rgb(160, 204, 247)', 'rgb(164, 247, 160)', 'rgb(247, 241, 160)', 'rgb(230, 160, 247)']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = 'rgb(211, 242, 242)';
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

