// Iteration 8: Making scoreboard functional
var scoreBoard=document.getElementById("score-board");
var playAgain=document.getElementById("play-again-button")
console.log(window.location.search)
let params = new URLSearchParams(window.location.search);

let score=params.get("score")
scoreBoard.textContent=score

playAgain.onclick=()=>{
    location.href="./game.html"
}
