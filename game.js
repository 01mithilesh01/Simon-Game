var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];   // the pattern which will form is stored in this array.
var randomChosenColour;
var randomNumber;
var userClickedPattern = [];   // stores the colors chosen by the user in each level.
var keypress = 0;
var level = 1; // stores the level of th game.

$(document).keypress(function(){ // This is executed only once , when the user press any button for starting the game for the first time.
    if(keypress===0)
        {
            nextSequence();
            keypress++;
        }
});


function nextSequence() // It generates random integer between 0 and 3 including, and the that integer is used and we get a color
                        // using  buttonColours array.
{
   
    
    $("h1").text("Level "+level);
    level++;
    userClickedPattern=[];
    
    randomNumber=Math.floor(Math.random()*4);
    
    randomChosenColour=buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
    
    console.log(gamePattern);
    
    
    
    // All the if statements produces sound for the colors when that color is randomly selected.
    
    if(randomChosenColour==="red")
        {
        $("#red").fadeOut(100).fadeIn(100);
        var audio = new Audio('sounds/red.mp3');
        audio.play(); 
        }
    if(randomChosenColour==="blue")
        {
        $("#blue").fadeOut(100).fadeIn(100);
        audio = new Audio('sounds/blue.mp3');
        audio.play(); 
        }
    if(randomChosenColour==="green")
        {
        $("#green").fadeOut(100).fadeIn(100);
        audio = new Audio('sounds/green.mp3');
        audio.play(); 
        }
    if(randomChosenColour==="yellow")
        {
        $("#yellow").fadeOut(100).fadeIn(100);
        audio = new Audio('sounds/yellow.mp3');
        audio.play(); 
        }
    
}

$(".btn").click(handler);    // executed when user clicks on any of the color and the handler function is called.
function handler()
{
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1); // the color clicked by the user is sent to checkAnswer function.
}


function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])  
    {
          
        if(gamePattern.length == userClickedPattern.length)
        {
            setTimeout(function(){nextSequence(); }, 1000);
            
          
        }
    }
    else    // executed when the user click wrong button
    {
        
        
        
        var audio = new Audio('sounds/wrong.mp3');
        audio.play(); 
        
        
        $("body").addClass("game-over");
    
        setTimeout(function() 
        {
            $("body").removeClass("game-over");
        },  200);
        
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        
        
        
    }
    
    
    
}




function startOver()  // This is function is called when the game is over ans the user has lost.
{
    level=1;
    gamePattern = [];
    keypress=0;
    
}









// Plays sound  when user click on the particular color button.
function playSound(name)
{
    if(name==="red")
        {
        animatePress("red");
        $("#red").fadeOut(80).fadeIn(80);
        var audio = new Audio('sounds/red.mp3');
        audio.play(); 
        }
    if(name==="blue")
        {
        animatePress("blue");
        $("#blue").fadeOut(80).fadeIn(80);
        var audio = new Audio('sounds/blue.mp3');
        audio.play(); 
        }
    if(name==="green")
        {
        animatePress("green");
        $("#green").fadeOut(80).fadeIn(80);
        var audio = new Audio('sounds/green.mp3');
        audio.play(); 
        }
    if(name==="yellow")
        {
        animatePress("yellow");
        $("#yellow").fadeOut(80).fadeIn(80);
        var audio = new Audio('sounds/yellow.mp3');
        audio.play(); 
        }
}





//When the button is clicked by the user or when random color is generated, the button is poped up. And for doig so this class is called.
function animatePress(currentColour)
{
    $("."+currentColour).addClass("pressed");
    
    setTimeout(function() 
    {
        $("."+currentColour).removeClass("pressed");
    },  50);
}














