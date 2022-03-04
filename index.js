//variable section
var randonNumber = Math.floor((Math.random() * 20));
console.log(randonNumber);
var btn = document.getElementById("btn")
var score = document.getElementById("num").innerHTML = 20;
var inpBox = document.getElementById("inp").value;
var hint = document.getElementById("hint");
var bgcolor = document.getElementById("body");
//Functions
document.getElementById("inp").style.display = "none"
scoreNum = 20;
function fun() {

    var scoreNumber = document.getElementById("num").innerHTML = 20;

    var inpBox = document.getElementById("inp").value;
    if (inpBox == randonNumber) {
        hint.innerHTML = "Correct"
        var scoreNumber = document.getElementById("num").innerHTML = scoreNum;
        bgcolor.style.backgroundColor = "#FF9526"
        bgcolor.style.transition = " all 1s linear"

    }
    else if (inpBox > randonNumber) {
        hint.innerHTML = "Too big"
        scoreNum = scoreNum - 1;
        score = scoreNumber--;
        var scoreNumber = document.getElementById("num").innerHTML = scoreNum;
        bgcolor.style.backgroundColor = "#EF4423"
        bgcolor.style.transition = " all 1s linear"


    }
    else if (inpBox < randonNumber) {
        hint.innerHTML = "Too Short"
        scoreNum = scoreNum - 1;
        score = scoreNumber--;
        var scoreNumber = document.getElementById("num").innerHTML = scoreNum;
        bgcolor.style.backgroundColor = "#EF4423"
        bgcolor.style.transition = " all 1s linear"


    }
}
var password = 611621;
var passBox = document.getElementById("passNum");

function pass() {
    if (passBox.value == password) {
        alert("Lets play the game")
        document.getElementById('div').style.display = "none"
        document.getElementById("inp").style.display = "block"
    } else {
        alert("You enter a wrong password\n\n\n Enter valid password")
    }
}