let buttonColors = ["red", "blue", "green", "yellow"];

let gameRunning = "false";
let level = 0;

let gamePattern = [];
let userClickedPattern = []

$(document).keydown(function(event) {
	if(event.key === "Enter" && gameRunning === "false") {
		gameRunning = "true";
		$("#level-title").text("Level " + level);
		nextSequence();
	}
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //make button flash and play audio
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
	$("#level-title").text("Level " + level);
	level += 1;
}

$(".btn").on("click", function() { //addEventListener to all .btn classes
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
	animatePress(userChosenColor);
});

//creates sound object for the pressed color and plays it
function playSound(color) {
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

//animates pressed button
function animatePress(currentColor) {
	$("." + currentColor).addClass("pressed");
	setTimeout(function() {
		$("." + currentColor).removeClass("pressed");
	}, 120);
}
