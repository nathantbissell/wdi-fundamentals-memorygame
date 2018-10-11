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
    //this.getElementsByTagName('cards')[i].setAttribute('src', cards[cardId].cardImage);
    
    
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    }   
    else {
    console.log("Sorry, try again.");
    }
    
};

var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        
        document.getElementById("game-board").appendChild(cardElement);
        
    };
};


var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);    
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
    console.log("User flipped " + cards[cardId].rank);
}

createBoard();

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
console.log(shuffle(cards));