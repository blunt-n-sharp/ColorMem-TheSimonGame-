
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChoosenColour;
var level = 0;

var green=$("#green");
var red=$("#red");
var yellow=$("#yellow");
var blue=$("#blue");
var title =$("h1");

var gameOver = false;
var check_index =0;

green.click(function(){
	onUserButtonClick(this)
});
red.click(function(){
	onUserButtonClick(this)
});
yellow.click(function(){
	onUserButtonClick(this)
});
blue.click(function(){
	onUserButtonClick(this)
});

document.addEventListener("keypress",function(){
	if(level==0){
		title.html("Level : "+level);
		gamePlay();	
	}
});
document.addEventListener("keydown",function(event){
	if(gameOver==true && event.key==='Escape'){
		console.log("Game restarted")
		userClickedPattern=[];
		gamePattern=[];
		gameOver=false;
		$(".message").html("");
		var background = $("body");
		background.css("background-color","blue");
		level=0;
		gamePlay();
	}
})
function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	return randomNumber;
}

function computerMakesChoice(){
	randomChoosenColour = buttonColors[nextSequence()];
	gamePattern.push(randomChoosenColour);
	
	console.log("Computer's Pattern : "+gamePattern);
	var btn = $("#" + randomChoosenColour);
	btn.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
function onUserButtonClick(btn){
	
	userClickedPattern.push(btn.id);
	var clickedButton = $("#"+btn.id);
	clickedButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	var audio = new Audio("./sounds/"+btn.id+ ".mp3");
	audio.play();
	
	setTimeout(checkPattern,1000);
	
	
}
function checkPattern(){
	console.log(check_index);
	if(userClickedPattern[check_index]==gamePattern[check_index]){
		gameOver=false;	
		check_index++;
	}
	else{
		gameOver = true;
		title.html("GAME OVER :(");
		$(".message").html("Press ESC to restart.");
		console.log("GAME OVER :(")
		var background = $("body");
		background.css("background-color","red");
		background.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
		check_index=0;
	}
	
	
	if(check_index>=gamePattern.length){
		console.log("Player's Pattern : "+userClickedPattern);
		userClickedPattern = [];
		check_index=0;
		gamePlay();
	}
	
}



function gamePlay(){
	
	if(gameOver==false ){
		level++;
		title.html("Level : "+level);
		computerMakesChoice();
		
		
	}
	
}

					
		

