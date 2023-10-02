var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;

$(document).keypress(function(){
  if(level < 1) {
  nextSequence();
}
})
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("level " + level)
  var randomNumbers = Math.floor((Math.random()) * 4);

  var randomChosenColor = buttonColors[randomNumbers];



  gamePattern.push(randomChosenColor);
  $("." + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();




}
$(".btn").bind("click", function() {
  var userChosenColor = this.classList[1];

  userClickedPattern.push(userChosenColor)

  playsound(userChosenColor);
  animatePress(userChosenColor)
  checkAnswer(userClickedPattern.length - 1);



})

function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed")
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed")
  }, 120)

}
 function checkAnswer(currentLevel){
   if ( gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
   console.log("success")
   if ( userClickedPattern.length === gamePattern.length){
   setTimeout(nextSequence,1000)
 }}
   else {
     $("body").addClass("gameover")
     setTimeout(function() {
       $("body").removeClass("gameover")
     }, 200)
     var audio = new Audio("sounds/wrong.mp3");
     audio.play();
     $("h1").text("Game Over, Press Any Key to Restart")
       startOver()
   }
 }
  function startOver(){
    level = 0 ;
    gamePattern = [];


  }
