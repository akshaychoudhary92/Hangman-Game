
var reUseWord = ['a','b','c',
'd','e','f',
'g','h','i',
				  'j','k','l',
		'm','n','o',
				  'p','q','r',
	 's','t','u',
				  'v','w','x',
				  'y','z'];

var wordHolder =['venus','uranus','neptune', 'jupiter','mercury','mars','earth'];

var playerWord = "";

var lettersInWord = [];

var numBlanks = 0;

var blanksAndSuccesses =[];

var wrongLetters = [];

var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

function reset()
{
	
	playerWord = wordHolder[Math.floor(Math.random() * wordHolder.length)];
	
	lettersInWord = playerWord.split('');
	
	numBlanks = lettersInWord.length;
	
	//RESET
	
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	reUseWord = [
	'a','b','c',
 	'd','e','f',
	'g','h','i',
 	'j','k','l',
 	'm','n','o',
 	'p','q','r',
	's','t','u',
	'v','w','x','y','z'];
	test=false;
	startGame();
}
function startGame()
{
	
	playerWord = wordHolder[Math.floor(Math.random() * wordHolder.length)];
	
	lettersInWord = playerWord.split('');
	
	numBlanks = lettersInWord.length;
	
	//RESET
	
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	reUseWord = ['a','b','c',
	'd','e','f',
	'g','h','i',
	'j','k','l',
	'm','n','o',
	'p','q','r',
	 's','t','u',
	 'v','w','x',
 'y','z'];

	
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

	 
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
	

function compareLetters(userKey)
{
				console.log('WORKING!');
				 
				if(playerWord.indexOf(userKey) > -1)
				{
					 
					for(var i = 0; i < numBlanks; i++)
					{
						
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
					
				}
				
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
					
				}
			
			
		
}
function winLose()
{
	
	if(rightGuessCounter === numBlanks)
	{
		 
		winCount++;
		
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
		reset();
	}
	
	else if(guessesLeft === 0)
	{
		
		loseCount++;
		
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}


startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < reUseWord.length; i++)
	{	
		if(letterGuessed === reUseWord[i] && test === true)
		{
			var spliceDword = reUseWord.splice(i,1);
			//Test / Debug
			console.log('Double word is = ' + reUseWord[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}