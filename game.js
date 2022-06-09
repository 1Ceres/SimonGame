var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStart = [];
var level = 0;
document.addEventListener("keydown", function(event) {
  gameStart.push(event);
  if (gameStart.length === 1) {
    nextSequence();
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  console.log("randomNumber: " + randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log("randomChosenColour: " + randomChosenColour, gamePattern);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  $("h1").html("Level " + level);
  level++;
  // userClickedPattern.length = 0;
  console.log("userClickedPattern from nextSequence(): " + userClickedPattern);
}

for (var i = 0; i < $(".btn").length; i++) {
  $(".btn")[i].addEventListener("click", function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log("userClickedPattern from click: " + userClickedPattern);
    playSound(userChosenColour);
    $("#" + userChosenColour).fadeOut(100).fadeIn(100);
    checkAnswer(userChosenColour);

  });
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(userChosenColour) {
  for (i = 0; i < gamePattern.length; i++) {



    // if (gamePattern[gamePattern.length - 1] == userChosenColour) {
    if (gamePattern[i] == userClickedPattern [i]){
      console.log("gamePattern and userClickedPattern from checkAnswer(): " + gamePattern[i], userClickedPattern[i]);


    }
    // } else if (gamePattern[gamePattern.length - 1] != userChosenColour) {
    else {
      $("h1").html("You Lost, Try again.");
      var lost = new Audio("sounds/wrong.mp3");
      lost.play();
      console.log("gamePattern and userClickedPattern from checkAnswer() if2: " + gamePattern, userClickedPattern);
    }
  }
    console.log(gamePattern, userClickedPattern);
  setTimeout(function() {
    nextSequence();
  }, 1000);
}
