/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let activePlayer = 0, dice, playerScores = [0,0], roundScore = 0, i = 0 ,previousRoll = 0;; 
let diceImage = document.querySelector('.dice');
let playerScore,gamePlaying = true;

const roll = () =>{
	if(gamePlaying){
		let currentScore = document.querySelector('#current-' + activePlayer);
		diceImage.style.display = 'block';
		dice = Math.floor(Math.random()*6)+1; 
		console.log(dice);
		switch(dice){
			case 1: diceImage.src="dice-1.png";
					  break;
			case 2: diceImage.src="dice-2.png";
					  break;
			case 3: diceImage.src="dice-3.png";
					  break;
			case 4: diceImage.src="dice-4.png";
					  break;
			case 5: diceImage.src="dice-5.png";
					  break;
			case 6: diceImage.src="dice-6.png";
					  break;
		};
	
		if(dice === 1){
					diceImage.style.display = 'none';
					roundScore = 0;
					activePlayer===0?activePlayer=1:activePlayer=0;
					i===0?i=1:i=0;
					document.querySelector('.player-0-panel').classList.toggle('active');
					document.querySelector('.player-1-panel').classList.toggle('active');
				}
		else
			roundScore = roundScore + dice;

		if(previousRoll === 6 && dice === 6)
		{
			playerScores[i] = 0;
			roundScore = 0;
			currentScore.textContent = 0;
			document.querySelector('#score-'+i).textContent = 0;
			activePlayer===0?activePlayer=1:activePlayer=0;
			i===0?i=1:i=0;
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			previousRoll = 0;
		}
		else
			{
				currentScore.textContent = roundScore;
				previousRoll=dice;	
			}
		
	}
	else alert('Start a new game');
}

const hold = () =>{
	if(gamePlaying){
		diceImage.style.display = 'none';
		let currentScore = document.querySelector('#current-' + activePlayer);
		currentScore.textContent = 0;
		playerScores[i] = playerScores[i] + roundScore;
		roundScore = 0;
		playerScore = document.querySelector('#score-' + activePlayer);
		if(playerScores[i]>=100)
		{
				playerScore.textContent = 'Winner!';
				gamePlaying = false;
		}
		else
			playerScore.textContent = playerScores[i];
		console.log(playerScores[i],0);
		if(i === 0){
				i = 1;
				activePlayer = 1;
		}
		else if(i === 1){
				i = 0;
				activePlayer = 0;
		}
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		previousRoll = 0;
		}
		else alert('Start a new game');
}

let newGame = () => {
	gamePlaying = true;
	activePlayer = 0;
	playerScores = [0,0];
	roundScore = 0;
	i = 0;
	diceImage.style.display = 'none';
	let currentScore0 = document.querySelector('#current-0');
	let currentScore1 = document.querySelector('#current-1');
	let playerScore0 = document.querySelector('#score-0');
	let playerScore1 = document.querySelector('#score-1');
	currentScore0.textContent = 0;
	currentScore1.textContent = 0;
	playerScore0.textContent = 0;
	playerScore1.textContent = 0;
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}

newGame();
diceImage.style.display = 'none';
let rollButton = document.querySelector('.btn-roll');
let holdButton = document.querySelector('.btn-hold');
let newGameButton = document.querySelector('.btn-new')
rollButton.addEventListener("click",roll);
holdButton.addEventListener("click",hold);
newGameButton.addEventListener("click",newGame);




