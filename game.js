let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = []

$(".btn").on("click", function() { //addEventListener to all .btn classes
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
});

// function clickHandler() {
//   console.log("yes");
// }

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //make button flash and play audio
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(color) {
  let audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}
