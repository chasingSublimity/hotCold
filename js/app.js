
$(document).ready(function(){

	/* Functions */
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	function compareNumbers(number1, number2) {
		var difference = Math.abs(number1 - number2);
		if (difference >= 50) {
			$("#feedback").text("cold")
		} else if (difference >= 30) {
			$("#feedback").text("kinda warm")
		} else if (difference >= 10) {
			$("#feedback").text("hot")
		} else if (difference === 0) {
			$("#feedback").text("You Won. Click new game to play again");
			$("#guessButton").css('opacity','0');
		};
	};

	function errorMessages(guess) {
		if (guess < 1 || guess > 100) {
			alert("Please enter a number larger than 1 and less than 100");
		};

	};


	/* Generate Random Number on Page Load */
  	var randomInt = getRandomInt(1,20);
  	console.log(randomInt);


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/* New Game Refresh */
  	$("a.new").click(function() {
  		location.reload();
  	});

  	/* Guess button functions */
  	$("form").submit(function(event){
  		event.preventDefault();
  		var guess = parseInt($("#userGuess").val());
  		errorMessages(guess);
  		compareNumbers(guess, randomInt);
  		var liTemplate = '<li>' + guess + '</li>';

  		function trackGuess() {
		$("#guessList").append(liTemplate);
	};
  		trackGuess();
  		$(this).closest('form').find("input[type=text], textarea").val("");
  	});




});


