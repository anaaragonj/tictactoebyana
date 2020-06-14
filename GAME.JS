var signal = false; //Shows if the game start
var turn = 0; // shows who's turn is next
var boa = new Array (); // buttons
window.onload = function(){
    var start = document.getElementById("start");
    start.addEventListener("click",startgame);
}
function startgame(){
    signal = true;
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    if(player1.value==""){
        alert("Add player's 1 name");
        player1.focus();
    
    }
    else{
        if(player2.value==""){
            alert("Add player's 2 name");
            player2.focus();
        }
        else{
            boa[0] = document.getElementById("l0");
            boa[1] = document.getElementById("l1");
            boa[2] = document.getElementById("l2");
            boa[3] = document.getElementById("l3");
            boa[4] = document.getElementById("l4");
            boa[5] = document.getElementById("l5");
            boa[6] = document.getElementById("l6");
            boa[7] = document.getElementById("l7");
            boa[8] = document.getElementById("l8");
            for(var i=0;i<9;i++)
            {
                boa[i].className = "startbutton";
                boa[i].value = "I";
            }
            turn = 1;
            document.getElementById("playerturn").innerHTML =  "IT IS YOUR TURN " + player1.value;
        }
    }
}
function put(button){
    if(signal==true){
        if(turn==1 && button.value=="I"){
            turn = 2;
            document.getElementById("playerturn").innerHTML = "IT IS YOUR TURN " + player2.value;
            button.value = "X";
            button.className = "player1button";
        }
        else{
            if(turn==2 && button.value=="I"){
                turn = 1 ;
                document.getElementById("playerturn").innerHTML = "IT IS YOUR TURN " + player1.value;
            button.value = "O";
            button.className = "player2button";
                

            }
        }
    }
    review();
}
function review(){
    if ((boa[0].value == "X" && boa[1].value== "X" && boa[2].value=="X")
        ||  (boa[3].value == "X" && boa[4].value== "X" && boa[5].value=="X")
        ||  (boa[6].value == "X" && boa[7].value== "X" && boa[8].value=="X")
        ||  (boa[0].value == "X" && boa[3].value== "X" && boa[6].value=="X")
        ||  (boa[1].value == "X" && boa[4].value== "X" && boa[7].value=="X")
        ||  (boa[2].value == "X" && boa[5].value== "X" && boa[8].value=="X")
        ||  (boa[0].value == "X" && boa[4].value== "X" && boa[8].value=="X")
        ||  (boa[2].value == "X" && boa[4].value== "X" && boa[6].value=="X")
    ){
        alert("Congratulation Player" + player1.value);
        signal = false;
    }
    if ((boa[0].value == "O" && boa[1].value== "O" && boa[2].value=="O")
    ||  (boa[3].value == "O" && boa[4].value== "O" && boa[5].value=="O")
    ||  (boa[6].value == "O" && boa[7].value== "O" && boa[8].value=="O")
    ||  (boa[0].value == "O" && boa[3].value== "O" && boa[6].value=="O")
    ||  (boa[1].value == "O" && boa[4].value== "O" && boa[7].value=="O")
    ||  (boa[2].value == "O" && boa[5].value== "O" && boa[8].value=="O")
    ||  (boa[0].value == "O" && boa[4].value== "O" && boa[8].value=="O")
    ||  (boa[2].value == "O" && boa[4].value== "O" && boa[6].value=="O")
){
    alert("Congratulation Player" + player2.value);
    signal = false;
}
}