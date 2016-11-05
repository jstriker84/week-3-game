var words = [ "agile", "pouncing", "purring", "calico", "tabby", "tortoiseshell", "fluffy", "independent"];
//array of words
var word = words[Math.floor(Math.random() * words.length)]; //selects a random word from word list
var answerArray = []; //creates empty array to house answer
var guessesLeft = 10; //tracks how many guess remain for the user
var lettersLeft = word.length; //tracks how many letters there are left in the word, when it equals zero, the player wins
var guessedLetters = [] //letters are pushed her as the player guesses
for(i = 0; i < word.length; i++){
  answerArray[i] = '_';
}; //fills answerArray with the right amount of blanks
var alreadyGuessed = 0; //Tracks if current guess have been guess before
var answerToDisplay = answerArray.join(' '); //joins the array to a space-separate string, is updated as players guess
document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay; //displays the blanks for the user to see

document.onkeyup = function(guess){
	var guessCap = String.fromCharCode(guess.keyCode).toUpperCase();
   
      //Check if player has already guessed the letter
      var alreadyGuessed = contains(guessCap,guessedLetters);
      if(alreadyGuessed === true){
        alert("You've already guessed " + guessCap.toUpperCase());
      }
      //Check if win-case is true, display that the game is won.
     else if(lettersLeft === 0){
      alert("You won!");
    }
     // Check if the user's answer is a single letter, otherwise display error message
     else if(isNaN(guessCap) && guessCap.length === 1 ){
        //insert negative guess results, they will be undone if the guess is right
        guessedLetters.push(guessCap);
        alert(guessCap.toUpperCase() + " is not a letter.");
        //check user's guess against the randomly selected word
        for(j=0; j < word.length; j++){
          if(word[j] === guessCap){
            answerArray[j] = guessCap;
            lettersLeft--;
          
          //update the guessed letters, placing the result in the below variable
          answerToDisplay = answerArray.join(' ')
          //display the new variable, thereby updating user on their progress
          document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay;
          alert("You guessed correctly!");
          if(lettersLeft === 0){
            alert("You won!");
          }
          }
      }
      }
     else{
       alert("Please guess only 1 letter.");
     }
     } 
