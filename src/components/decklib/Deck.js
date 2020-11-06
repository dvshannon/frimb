



class Deck {
    constructor() {
        this.deck = []
        this.dealtCards = []
    }

    generateDeck() {
        let card = (suit, value) => {
             this.name = value + ' of ' + suit
             this.suit = suit
             this.value = value

             return {
                 name: this.name,
                 suit: this.suit,
                 value: this.value
             }
        }

        let values =['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(card(suit, value));
            }
        }
    }

    printDeck(){
        if(this.deck.length == 0){
            console.log('The deck has not been generated');
        } else {
            for(let c = 0; c < this.deck.length; c++){
                console.log(this.deck[c]);
            }
        }
    }

    shuffleDeck(){
        let currentIndex = this.deck.length, tempValue, randIndex;
        while(0 != currentIndex) {
            randIndex = Math.floor(Math.random() * currentIndex );
            currentIndex -= 1;
            tempValue = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randIndex];
            this.deck[randIndex] = tempValue
        }
    }

    dealDeck() {
        let dealtCard = this.deck.shift();
        this.dealtCards.push(dealtCard);
            return dealtCard;
    }

    replaceCard() {
        this.deck.unshift(this.dealtCards.shift());
    }

    clearDeck(){
        this.deck= [];
    }
}

// new instance of deck
deck = new Deck();


// START GAME
deck.generateDeck();
deck.shuffleDeck();
console.log('----------------------------SHUFFLING DECK-------------------------------');
// deck.printDeck();
console.log(deck.dealDeck());
console.log('----------------------------DEALING-------------------------------');


// PUT CARD BACK
// deck.replaceCard();


// NEW GAME
// console.log(deck.clearDeck());
// deck.generateDeck();
// deck.shuffleDeck();
// console.log('----------------------------SHUFFLING DECK-------------------------------');
// console.log(deck.dealDeck());
// console.log('----------------------------DEALING-------------------------------');
console.log(deck);