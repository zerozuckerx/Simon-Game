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
	// let lastColor = userClickedPattern.at(-1); //string e.g. "red"
	// let lastIndex = buttonColors.indexOf(lastColor);
	//
	// console.log("game pattern: " + gamePattern);
	// console.log("user pattern: " + userClickedPattern);
	//
	// if(gamePattern[lastIndex] === lastColor) {
	// 	console.log("success");
	// 	setTimeout(nextSequence(), 5000);
	// } else {
	// 	console.log("wrong");
	// }
	console.log(currentLevel);
}
	// }


// addEventListener to all .btn classes
$(".btn").on("click", function() {

  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);
});

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
