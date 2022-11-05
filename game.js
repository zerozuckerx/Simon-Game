let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4); //create number between 0 and 3 (for array)
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColor);
}

function makeSound(color) {
  switch (color) {

    case "red":
      let red = new Audio("sounds/red.mp3");
      red.play();
      break;

    case "blue":
      let blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;

    case "green":
      let green = new Audio("sounds/green.mp3");
      green.play();
      break;

    case "yellow":
      let yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;

    default:
      console.log("color");

  }
}
