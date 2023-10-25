// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1_box = document.getElementById("number1");
let number2_box = document.getElementById("number2");
var num1 = Math.round(Math.random() * 100);
var num2 = Math.round(Math.random() * 100);

number1_box.textContent = num1;
number2_box.textContent = num2;

// Iteration 3: Creating variables required to make the game functional
let score = 0;


let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mult = document.getElementById("mul");
let divide = document.getElementById("divide");
let modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3_box = document.getElementById("number3")
let num3=0;

// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
    num1 = Math.round(Math.random() * 100);
    num2 = Math.round(Math.random() * 100);

    number1_box.textContent = num1;
    number2_box.textContent = num2;

    let Operators = Math.ceil(Math.random() * 5);

    switch (Operators) {
        case 1: num3 = num1 + num2;
            break;
        case 2: num3 = num1 - num2;
            break;
        case 3: num3 = num1 * num2;
            break;
        case 4: num3 = Math.floor(num1 / num2);
            break;
        case 5: num3 = num1 % num2;
            break;
    }
    number1_box.textContent = num1;
    number2_box.textContent = num2;
    number3_box.textContent = num3;




}

randomise();

// Iteration 6: Making the Operators (button) functional
plus.onclick = () => {
    if (num1 + num2 == num3) {
        score++;
        console.log("plus");
        randomise();
        starttimer()
        clearInterval(interval)


    }
    else {
        gameOver()
    }

}

minus.onclick = () => {
    if (num1 - num2 == num3) {
        score++;
        console.log("minus",score);
        randomise();
        starttimer()
        clearInterval(interval)


    }
    else {
        gameOver()
    }
    
}

mult.onclick = () => {
    if (num3==num1*num2) {
    console.log("multiply");
    score++;
    randomise();
    starttimer()
    clearInterval(interval)


    }
    else {
        gameOver()
    }

}

divide.onclick = () => {
    if (num3==Math.floor(num1/num2)) {
        console.log("divide");
        score++;
        randomise();
        starttimer()
        clearInterval(interval)


    }
    else {
        gameOver()
    }
    
}
modulus.onclick = () => {
    if (num3==num1%num2) {
        console.log("modulo");
        score++;
        randomise();
        starttimer()
        clearInterval(interval)


    }
    else {
        gameOver()
    }

}

function gameOver() {
    window.location.href=`./gameover.html?score=${score}`;
}

// Iteration 7: Making Timer functional
let time;
var timer_box=document.getElementById("timer");
let interval;

function starttimer(){
    time=20;
    interval=setInterval(()=>{
        timer_box.textContent=time;
        time--;
   
        if(time==0){
    clearInterval(interval)
    location.href= "./gameover.html";}
    },1000)

}
starttimer()



