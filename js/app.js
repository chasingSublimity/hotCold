
$(document).ready(function(){

	/* Random Integer Function */
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	/* Comparison Function */
	function compareNumbers(number1, number2) {
		var difference = Math.abs(number1 - number2);

		/* Error Handling */
		if (number1 < 1 || number1 > 100 || isNaN(number1) === true) {
			alert("Invalid Input: Please enter a number larger than 1 and less than 100.");
		} else if (difference >= 50) {
			$("#feedback").text("cold");
			trackGuess();
		} else if (difference >= 30) {
			$("#feedback").text("kinda warm");
			trackGuess();
		} else if (difference >= 10) {
			$("#feedback").text("hot");
			trackGuess();
		} else if (difference === 0) {
			$("#feedback").text("You Won. Click new game to play again");
			$("#guessButton").css('opacity','0');
		};
	};

	/* Guess Tracking Function */
	function trackGuess() {
		var guess = parseInt($("#userGuess").val());
		var liTemplate = '<li>' + guess + '</li>';
		$("#guessList").append(liTemplate);
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

  	/* On Guess Button Click */
  	$("form").submit(function(event){
  		event.preventDefault();
  		var guess = parseInt($("#userGuess").val());
  		compareNumbers(guess, randomInt);
  		$(this).closest('form').find("input[type=text], textarea").val("");
  	});
});


