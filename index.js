var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "./images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

//second die//
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

//setting the h1 to display winner or if draw//
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's A Draw!";
}
