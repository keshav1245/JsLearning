/*
	PROBLEM STATEMENT : 
	I want you to create a simple guess the number type game. It should choose a random number between 
	1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should 
	be told if they are right or wrong — and, if they are wrong, whether the guess was too low or too high. 
	It should also tell the player what numbers they previously guessed. The game will end once the player 
	guesses correctly, or once they run out of turns. When the game ends, the player should be given an 
	option to start playing again.
*/

//Setting the variables and constants

let randNum = Math.floor(Math.random()*100)+1;		// generating Random number between 1 to 100 

//linking the fields 
const guess = document.querySelector('.guessField');
const submitbut = document.querySelector('.guessSubmit');
const prevresult = document.querySelector('.lastResult');
const lowhi = document.querySelector('.lowOrHi');
const prevguess = document.querySelector('.guesses');
let counter = 1; 									// counter for 10 turns
let resetbut;
guess.focus();										//put cursor in the text field

function checkguess(){
	let userguess = Number(guess.value);			//taking value input by user
	if(counter === 1){
		prevguess.textContent = "Previous Guesses : ";
	}
	prevguess.textContent += userguess + ' '; 		//inserting in previous guesses p tag

	if(userguess === randNum){						//checking for equality of random number and user guess 
		prevresult.textContent = 'Congratulations! You got it right...'; //if equal then changing confirmation text
		prevresult.style.backgroundColor = 'green';//changing background color to green
		lowhi.textContent = "";
		gameover(); 								// calling game over function for other visible changes
	}else if(counter === 10){ 						// if no correct guess and 10 turns are over
		prevresult.textContent = 'GAME OVER !'; 
		gameover();
	}else{ 											// if neither correct guess nor 10 turns are done and the game is still going on 
		prevresult.textContent = 'Wrong guess !';
		prevresult.style.backgroundColor = 'red';
		if(userguess < randNum){
			lowhi.textContent = "Last guess was Low !";
		}else if(userguess>randNum){
			lowhi.textContent = 'Last guess was High !';
		}

	}
	counter++;
	guess.value = '';
	guess.focus();
}

//event for calling the check guess function
submitbut.addEventListener('click',checkguess);

//Game Over conditions 
function gameover(){
	guess.disabled =true; 							//disabling guess input field
	submitbut.disabled =true;						//disabling submit guess button
	resetbut = document.createElemnt('button');		//creating a button for reset game
	resetbut.textContent = "Start New Game !";		//changing text of reset button
	document.body.appendChild(resetbut);			//appending the button to body
	resetbut.addEventlistener('click',resetgame);	//event listener attached to reset button
}

//conditions for reseeting the game 
function resetgame(){
	counter =1;
	const resetparas = document.querySelectorAll('.resetparas p');
													//selecting all paragraphs in class .resetparas

	for(var i=resetparas.length-1;i >= 0;i--){		//resetpara is array having all paras in .resetparas class.
		resetparas[i].textContent = '';				// changing text of all paras to ''
	}

	resetbut.parentNode.removeChild(resetbut);		//remove the reset button from our html page

	guess.disabled = false;							//enabled guess input
	submitbut.disabled = false;						//enabled submit button
	guess.value = '';								//empty value for guess input field
	guess.focus();		

	prevresult.style.backgroundColor = 'white';
	randNum = Math.floor(Math.random()*100)+1;		//generated a new random number 
}

