/*declare variables*/
$(document).ready(function(){

    var secretNumber = 0; /*the secret number value is 0*/
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;
    /*Random number generator*/
    function secretNumberGenerator (){
    secretNumber = (Math.floor(Math.random()*100));
        console.log ("The secret number is: " + secretNumber);
    }
    secretNumberGenerator();

    /*Evaluates if it is hot, warm or cold, in positive substraction*/
    function positiveCount(){
    if (userGuess / secretNumber === 1){
        setFeedback("Wow! You win!");
        finish = true;
    } else if ((secretNumber - userGuess) > 60.5){
        setFeedback("Brrr! It's freezing!");
    } else if ((secretNumber - userGuess) > 30.5){
        setFeedback("It's cold!");
    } else if ((secretNumber - userGuess) > 20.5){
        setFeedback("Well, it´s warm");
    } else if ((secretNumber - userGuess) > 10.5){
        setFeedback("It´s hot!");
    } else if ((secretNumber - userGuess) > 1.5){
        setFeedback("It´s burning!");
    } else {
    } 
}
/*Evaluates if it is hot, warm or cold, in negative substraction*/
function negativeCount(){
    if (userGuess / secretNumber === 1){
        setFeedback("Wow! You win!");
        finish = true;
    } else if ((userGuess - secretNumber) > 60.5){
        setFeedback("Brrr! It's freezing!");
    } else if ((userGuess - secretNumber) > 30.5){
        setFeedback("It´s cold!");
    } else if ((userGuess - secretNumber) > 20.5){
        setFeedback("Well, it's warm");
    } else if((userGuess - secretNumber) > 10.5){
        setFeedback("It´s hot!");
    } else if((userGuess - secretNumber) > 1.5){
        setFeedback("It´s burning!");
    } else {
    }
}
/*It compares if the difference is positive or negative*/
    function comparisonCount(){
        if (userGuess - secretNumber > 0){
            negativeCount();
        } else {
            positiveCount();
        }
    }
/*--- Function that sends message to user --*/
    function setFeedback(feedback) {
        $('#feedback').text(feedback);
    }

/*--- Function that counts attempts of user --*/
    function setCount(count){
        $('#count').text(guessCount);
    }

/*--- Function that resets game --*/
    function newGame(){
        guessCount = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        secretNumber = (Math.floor(Math.random()*100));
        setFeedback("Make your guess!");
        console.log("it works! new secret number is " + secretNumber);
    }

/*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

/*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

/*---- To start a new game ----*/
    $('.new').click(function(){
        newGame();
    });

/*-- Checks the user's input--*/
function checkInput(){
    if(isNaN(userGuess)) {
        alert("Please enter a number from 1 - 100!");
    } else if(userGuess === " ") {
        alert("Well, you have to input a number");
    } else if (userGuess < 0 || userGuess > 100) {
        alert("Plese enter a number from 1 - 100!");
    } else {
        comparisonCount();
        console.log("User guess = " + userGuess);
        $('#userGuess').val('');
        guessCount++;
        setCount(guessCount);
        $('ul#guessList').append("<li>" + userGuess + "</li>");
    }
}

/*--- To get user's input --*/
    $("form").submit(function(event){
        event.preventDefault();
        //if user finished the game, it doesn't allow him to continue!
        if(!finish){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            setFeedback("You already won! Need to start a new game!");
        }
    });
});