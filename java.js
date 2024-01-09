console.log("what the fuck!")

function getComputerChoice () {
    let a=["rock", "paper", "scissor"];
    //console.log(a[(Math.floor(Math.random() * a.length))])//
    return a[(Math.floor(Math.random() * a.length))]
}

function playRound(playerSelection, computerSelection) {
    const player=playerSelection.toLowerCase();
    const computer=computerSelection

    if (player===computer) {
        return (`player is ${player} and computer is ${computer}. Draw`)
    } else if (player=="rock" && computer=="scissor" || player=="paper" && computer=="rock" || player=="scissor" && computer=="paper") {
        return (`player win. player: ${player} and computer: ${computer}`)
    } else {
        return (`computer win. player: ${player} and computer: ${computer}`)
    }
}

function playerSelection() {
    let player=prompt("rock paper scissor?");
        return player.toLowerCase()
}

function game() {

    console.log(playRound(playerSelection(),getComputerChoice()))
    
    console.log(playRound(playerSelection(),getComputerChoice()))
    
    console.log(playRound(playerSelection(),getComputerChoice()))
    
    console.log(playRound(playerSelection(),getComputerChoice()))
    
    console.log(playRound(playerSelection(),getComputerChoice()))  
} 


game()