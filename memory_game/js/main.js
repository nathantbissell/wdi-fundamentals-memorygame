console.log("Up and running!");

var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    },
];
var cardsInPlay = [];
var checkForMatch = function() {
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    }   
    else {
    console.log("Sorry, try again.");
    }
    
};

var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        
        document.getElementById("game-board").appendChild(cardElement);
    }
}

var flipCard = function() {
    cardId = this.getAttribute('data-id');
    console.log(cards[cardId].cardImage);
    console.log("The suit is " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    
    };


createBoard();
checkForMatch();