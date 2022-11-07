let buttonColors = ["red", "blue", "green", "yellow"];

let gameRunning = false;
let level = 1;

let gamePattern = [];
let userClickedPattern = []

$(document).keydown(function(event) {

	if(!gameRunning && event.key === "Enter") {
		// !gameRunning is equal to gameRunning === false
		nextSequence();
		gameRunning = true;
	}
});

function nextSequence() {

	$("#level-title").text("Level " + level);
	level++;

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  // make button flash and play audio
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function checkAnswer(currentLevel) {

	if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		if(userClickedPattern.length === gamePattern.length) {
			setTimeout(nextSequence, 1000);
			userClickedPattern = [];
		}
	} else {
		let audioWrong = new Audio("sounds/wrong.mp3");
		audioWrong.play();
		reset();
	}
}

// addEventListener to all .btn classes
$(".btn").on("click", function() {

  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);
});

function reset() {
	//flash screen with red background
	$("body").addClass("game-over");
	setTimeout(function() {
		$("body").removeClass("game-over");
	}, 200);

	//message: enter to play again
	$("#level-title").text("Game over. \nEnter to try again");

	level = 1;
	gameRunning = false;
	gamePattern = [];
}

// creates sound object for the pressed color and plays it
function playSound(color) {
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

// animates pressed button
function animatePress(currentColor) {

	$("." + currentColor).addClass("pressed");
	setTimeout(function() {
		$("." + currentColor).removeClass("pressed");
	}, 120);
}
