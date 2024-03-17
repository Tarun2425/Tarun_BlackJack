

let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""

let player = {
    name: "Tarun",
    chips : 145
}

document.getElementById("player-el").textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    cards = [firstCard, secondCard]

    sum = firstCard + secondCard

    renderGame()
}

function randomNumber(){
    let rNumber = Math.floor(Math.random()*13) +1
    if (rNumber > 10){
        return 10
    }else if(rNumber === 1){
        return 11
    }else {
        return rNumber
    }
}

function renderGame(){
    
    document.getElementById("cards-el").textContent = "Cards: "
    for(let i= 0;i<cards.length;i++){
        document.getElementById("cards-el").textContent += cards[i] + " "
    }
    document.getElementById("sum-el").textContent ="Sum: " + sum
    
if(sum <= 20){
    message = "Do you want to draw another card?"
} else if(sum === 21){
    message ="Wohoo! you've got Blackjack!"
    hasBlackJack = true
} else{
    message ="You're out of the game!"
    isAlive = false
}

document.getElementById("message-el").textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck!")
    if(isAlive === true && hasBlackJack === false){
    let card = randomNumber()
    sum += card
    cards.push(card)
    renderGame()
    }
}