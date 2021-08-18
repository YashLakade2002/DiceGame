var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomsource1 = "images/dice" + randomnumber1 + ".png";

document.querySelectorAll('img')[0].setAttribute("src", randomsource1); 


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomsource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomsource2);


if(randomnumber1 > randomnumber2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins!🚩";
}else if(randomnumber2 > randomnumber1){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelectorAll("h1")[0].innerHTML = "Draw!";
}