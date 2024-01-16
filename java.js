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
        return "player win"
        //return (`player win. player: ${player} and computer: ${computer}`)
    } else {
        return "computer win"
        //return (`computer win. player: ${player} and computer: ${computer}`)
    }
}

function playerSelection() {
    const buttons = document.querySelectorAll('button');
    console.log(buttons)
    let player_win=0;
    let computer_win=0;
    let total_attemp=0;
    let gameEnded = false;
    buttons.forEach((button) => {
        button.addEventListener('click',()=> {
            const winner=playRound(button.id, getComputerChoice());
            total_attemp+=1
            if (winner=="player win") {
                player_win+=1
            } 
            if (winner=="computer win") {
                computer_win+=1
            }
            if (player_win===5 || computer_win===5) {
                if (player_win>computer_win) {
                winner_message("player", player_win,total_attemp)
                }
                else {
                winner_message("computer", computer_win,total_attemp)    
                }
            gameEnded = true;
            }
        })
    })
}

function winner_message(winner, howmany, total_attemp) {
    const container=document.querySelector('div.result');
    const message=document.createElement('div');
    message.textContent=`${winner} won ${howmany} in ${total_attemp} attemps`;
    container.appendChild(message)
    gameEnded = true;
}
/*
function game() {
    console.log(playRound(button.id,getComputerChoice()))
} 
*/
playerSelection()
