var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png-dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource2 = "images/dice" +randomNumber2 + ".png"; //images/dice1.png-dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🏆Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🏆";
}
else{
    document.querySelector("h1").innerHTML="🤝Draw!🤝";
}

const refreshBtn = document.getElementById("btnRefresh"); 
function handleClick() { history.go(0); } refreshBtn.addEventListener("click", handleClick);