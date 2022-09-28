/*
create variable for paper, rock and scissor.
create variable for computor choice and human choice.
create variable for computer win and human win and draw
human choise equals to prompt r,p,s (0,1,2)
make random generator for computor choice(0,1,2)
if humanchoice=[0] and comchoice=[1] then you lose (+1 to computer win)
if humanchoice=[0] and comchoice=[2] then you win (+1 to human win)
if humanchoice=[1] and comchoice=[0] then you win (+1 to human win)
if humanchoice=[1] and comchoice=[2] then you lose (+1 to computer win)
if humanchoice=[2] and comchoice=[0] then you lose (+1 to computer win)
if humanchoice=[2] and comchoice=[1] then you win (+1 to human win)
else then draw (+1 to draw)
*/

var humanWins, aiWins, ties = 0;

function rockPaperScissor(){
    var humanChoice;
    var aiChoice;
    var rockPaperOrScissor = ["r", "p", "s"];

    humanChoice = prompt("Choice your move Rock(r), Paper(p), Scissor(s). Your choices are r, p and s");
    aiChoice = rockPaperOrScissor[Math.floor(Math.random() * 3)];

    if(humanChoice == aiChoice){
        ties += 1;
        alert("Computer choose"+ aiChoice+". It's a draw");
    }else if((humanChoice == "r" && aiChoice == "p") || (humanChoice == "p" && aiChoice == "s") 
                || (humanChoice == "s" && aiChoice == "r")){
        aiWins = 1;
    }
}