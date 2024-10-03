function rollDice() {
    let sides = document.getElementById('numSides').value
    let result = getDiceResult(sides)
    document.getElementById('dice-result').innerText = 'you rolled a '+result
}

function getDiceResult(max) {
    let result = Math.ceil(Math.random() * max)
    return result
}