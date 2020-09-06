var randomNumber = Math.floor(Math.random() * 6) + 1; //Number between 1-6
var randomDice = "dice" + randomNumber + ".png"; //Generate a random dice
var randomImage = "images/" + randomDice; //Establish the proper image of dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Number between 1-6
var randomDice2 = "dice" + randomNumber2 + ".png"; //Generate a random dice
var randomImage2 = "images/" + randomDice2; //Establish the proper image of dice

document.querySelector(".img1").src = randomImage; //change the img src
document.querySelector(".img2").src = randomImage2; //change the img src

// Modify the h1 according to winner
if (randomNumber > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins";
} else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").textContent = "Player 2 Wins🚩";
} else {
  document.querySelector("h1").textContent = "🚩Draw🚩";
}
