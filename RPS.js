document.getElementById('Rock').addEventListener('click', handleRockClick);
document.getElementById('Paper').addEventListener('click', handlePaperClick);
document.getElementById('Scissors').addEventListener('click', handleScissorsClick);
const possibleChoices = new Map();
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
possibleChoices.set(0,'Rock');
possibleChoices.set(1,'Paper');
possibleChoices.set(2,'Scissors');
function handleRockClick()
{
	gameLogic(ROCK);
}
function handlePaperClick()
{
	gameLogic(PAPER);
}
function handleScissorsClick()
{
	gameLogic(SCISSORS);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function writeChoice(playerChoice){
    window.alert('Opponent picks ' + possibleChoices.get(playerChoice));
}
function gameLogic(playerChoice){
	window.alert('You chose ' + possibleChoices.get(playerChoice));
    opChoice = getRandomInt(possibleChoices.size);
    writeChoice(opChoice);
    switch (true) {
        case opChoice === playerChoice:
          window.alert('Draw!');
          break;
        case opChoice === ROCK && playerChoice === PAPER:
        case opChoice === PAPER && playerChoice === SCISSORS:
        case opChoice === SCISSORS && playerChoice === ROCK:
          window.alert('You Won!');
          break;
        case opChoice === ROCK && playerChoice === SCISSORS:
        case opChoice === PAPER && playerChoice === ROCK:
        case opChoice === SCISSORS && playerChoice === PAPER:
          window.alert('You Lost!');
          break;
        default:
          break;
    }
}
