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

});

/*esto ya estaba en el repo*/
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
/*finaliza lo que estaba en el repo*/


$(".new").click(function(){
/*this function restarts the Game*/
    newGame();
});


