const gameOptions = document.querySelectorAll('.game-options');
const body = document.querySelector('body');
const gameContainer = document.querySelector('.container');
const playerDisplay = document.querySelector('.player-displayer');
const restartMain = document.querySelector('.restart-main');
const quitMain = document.querySelector('.quit-main');
let fisrtPlayer;
 
const winnings = [[1,2,3],[1,4,7],[4,5,6], [7,8,9], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function quitGame(){
    window.close();
}

function rematchGame(){
    window.location.reload();
    return true;
}


function isSubArray(subArray, array) {
  for (let i = 0; i <= array.length - subArray.length; i++) {
    if (array.slice(i, i + subArray.length).toString() === subArray.toString()) {
      return true;
    }
  }
  return false;
}


function getWinningPositions(referenceArray, inputArray){
    let returnValue = [];
    for (let innerArray of referenceArray){
        if(isSubArray(innerArray, inputArray)){
            returnValue = innerArray;
        }
    }
    
    
    return returnValue;
}


function appendClass(target, className){
    target.classList.add(className);
}


function checkScores(player) {
    const options = [...player.options];
    return winnings.some(win => win.every(value => options.includes(value)));
}


function setIndex(target){
    let gameOptionsIndexes = [];
    for(let i = 0; i < target.length; i++){
        gameOptionsIndexes.push(target[i].classList.item(1));
    }
    return gameOptionsIndexes;
}


function updateDisplayer(playerRound){
   playerDisplay.textContent = playerRound;
}


function placeChoice(target, mark){
    function setParamas(){
        target.textContent = mark;
        target.style = 'box-shadow:1px 0px 10px orangered;opacity:0.7;box-shadow: 0px 0px 100px red inset';
    }
    return new Promise((resolve, reject)=>{
        resolve(setParamas);
    })
    
   
}


function setPlayer(mark){
    return {
            mark : mark,
            options : [],
            classes: [],
            myTurn: false,
            isWinner: false,
            played: false,
        }   
}

//instanciate two players;
const playerOne = setPlayer('X');
const playerTwo = setPlayer('O');
const players = [playerOne, playerTwo];
let currentPlayer = 'X';
playerOne.message = "X-TURN";
playerTwo.message = "O-TURN";


function determineTurns(participants){
    let participant, participantIndex, nextParticipant;
    
    for(let person of participants){
        if(person.myTurn == true){
            participant = person;
            participantIndex = participants.indexOf(person);

            if(participantIndex == 0){
                nextParticipant = participants[1];
                break;
            }
            nextParticipant = participants[0];
            break
        }
    }
    return [participant, nextParticipant];
}



function handleClick(event) {
    if (!event.target.textContent) {
        event.target.textContent = currentPlayer; //mark the field
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; //change players
        playerDisplay.textContent = currentPlayer + '-TURN';//show whos next to play
        
        const player = currentPlayer === 'X' ? playerTwo : playerOne; //point to player object
        player.options.push(parseInt(event.target.classList.item(1)));
        
        if (checkScores(player)) { //if one player wins. render the game unplayerable;
            setTimeout(()=>{
                const winningPositions = getWinningPositions(winnings, player.options);
                let final = displayWinner(player.mark);
                gameContainer.appendChild(final);
                gameOptions.forEach(element=>{ 
                    winningPositions.some(value=>{
                        if(element.classList.contains(value)){
                            appendClass(element, 'winning-class');
                        }
                    })
                }) 
                
            
            },100)
            gameOptions.forEach(option => {
                
                option.removeEventListener('click', handleClick)});
        }
    }
}


function beginGame(){
    gameOptions.forEach(option => option.addEventListener('click', handleClick));
}


function createDialog(){

    //Create dialog elements 
    const dialog = document.createElement('dialog');
    const dialogHeader = document.createElement('div');
    const dialogChoicesContainer = document.createElement('div');
    const player1Button = document.createElement('button');
    const player2Button = document.createElement('button');

    //set classnames;
    appendClass(dialog, 'set-player-dialog');
    appendClass(player1Button, 'dialog-button')
    appendClass(player2Button, 'dialog-button')
    appendClass(dialogChoicesContainer,'dialog-choices-container');

    //set values
    dialogHeader.textContent = 'WHO PLAYS FIRST';
    player1Button.textContent = "X";
    player2Button.textContent = "O";
    

    player2Button.onclick = ()=>{
        playerTwo.myTurn = true;
        currentPlayer = 'O';
        dialog.style.display = 'none';
        playerDisplay.textContent = playerTwo.message;
        beginGame();
    }
    player1Button.onclick = ()=>{
        playerOne.myTurn = true;
        currentPlayer = 'X';
        dialog.style.display = 'none';
        playerDisplay.textContent = playerOne.message;
        beginGame();
    }

    //position the elements
    dialogChoicesContainer.appendChild(player1Button);
    dialogChoicesContainer.appendChild(player2Button);
    dialog.append(dialogHeader, dialogChoicesContainer);

    return dialog;
}


function displayWinner(winner){
    
    const dialog = document.createElement('dialog');
    const container = document.createElement('div');

    const headerTextBox = document.createElement('div');
    const headerTextNode = document.createTextNode('CONGRATULATIONS!!!!!');

    const winnerTextBox = document.createElement('div');
    const winnerTextNode = document.createTextNode(`The Winner is ${winner}`);

    const controlsContainer = document.createElement('div');
    const quitButton = document.createElement('button');
    const rematchButton = document.createElement('button');

    //setting values
    quitButton.textContent = 'QUIT';
    rematchButton.textContent = 'REMATCH';
    
    quitButton.addEventListener('click',(e)=>{
        e.stopPropagation();
        dialog.style.display = 'none';
    })
    
    rematchButton.addEventListener('click',(e)=>{
        e.stopPropagation();
        rematchGame();
    })


    //styling the dialog
    dialog.style = 'width:50vmax;height:20vmin;display:grid;grid-template-rows:repeat(3, 1fr);grid-gap:1vh;background-color:orangered;position:absolute;inset:50% auto auto 50%; transform:translate(-50%, -50%);color:#fff;border-radius:5vw;padding:2vw;opacity:.9;border:.000005px solid orangered;outline:2px solid orangered;outline-offset:2px;';

    headerTextBox.style= 'display:grid;justify-content:center;font-weight:800;color:#000;font-size:3vmin;';
    winnerTextBox.style= 'display:grid;justify-content:center;text-transform:uppercase;font-size:3vmin;';
    controlsContainer.style= 'display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:3vw;justify-content:center;';

    quitButton.classList.add('winner-dialog-controls');
    rematchButton.classList.add('winner-dialog-controls');

    //positioning the elements
    controlsContainer.appendChild(quitButton);
    controlsContainer.appendChild(rematchButton);
    winnerTextBox.appendChild(winnerTextNode);
    headerTextBox.appendChild(headerTextNode);
    container.appendChild(headerTextBox);
    container.appendChild(winnerTextBox);
    container.appendChild(controlsContainer);
    dialog.appendChild(container);

    return dialog;

}


window.onload = ()=> {
    const dialog = createDialog();
    body.appendChild(dialog);
    // dialog.close();
}

