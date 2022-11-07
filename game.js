let buttonColors = ["red", "blue", "green", "yellow"];

let gameRunning = false;
let level = 1;

let gamePattern = [];
let userClickedPattern = []

$(document).keydown(function(event) {

	if(!gameRunning && event.key === "Enter") {
		// !gameRunning is equal to gameRunning === false

		// $("#level-title").text("Level " + level);
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
	//let lastIndex = buttonColors.indexOf(lastColor);

	console.log("game pattern: " + gamePattern + "\n"
						+ "user pattern: " + userClickedPattern);

	if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		console.log("success");
		if(userClickedPattern.length === gamePattern.length) {
			setTimeout(nextSequence, 1000);
			userClickedPattern = [];
		}
	} else {
		console.log("wrong");
		
	}
}

// _________________________________________
// 1. gamePattern = ["red"]
// wenn userClickedPattern[0] = gamePattern[0]
// 	nextSequence()
// else
// 	reset()
// 2. gamePattern = ["red", "blue"]
// userClickedPattern = [] in nextSequence()
// wenn userClickedPattern[0] = gamePattern[0]
// _________________________________________

// addEventListener to all .btn classes
$(".btn").on("click", function() {

  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);
});

function reset() {
	//set screen to red background
	//message: enter to play again
	//wait for user to press enter
	gameRunning = false;
	gamePattern = [];
	userClickedPattern = [];
	level = 1;
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
