// data entry for suites
const diamonds = [
    'ace of diamonds', 'two of diamonds', 'three of diamonds', 'four of diamonds', 'five of diamonds', 'six of diamonds', 'seven of diamonds', 'eight of diamonds', 'nine of diamonds', 'ten of diamonds', 'jack of diamonds', 'queen of diamonds', 'king of diamonds'
];

const hearts = [
    'ace of hearts', 'two of hearts', 'three of hearts', 'four of hearts', 'five of hearts', 'six of hearts', 'seven of hearts', 'eight of hearts', 'nine of hearts', 'ten of hearts', 'jack of hearts', 'queen of hearts', 'king of hearts'
];

const spades = [
    'ace of spades', 'two of spades', 'three of spades', 'four of spades', 'five of spades', 'six of spades', 'seven of spades', 'eight of spades', 'nine of spades', 'ten of spades', 'jack of spades', 'queen of spades', 'king of spades'
];

const clubs = [
    'ace of clubs', 'two of clubs', 'three of clubs', 'four of clubs', 'five of clubs', 'six of clubs', 'seven of clubs', 'eight of clubs', 'nine of clubs', 'ten of clubs', 'jack of clubs', 'queen of clubs', 'king of clubs'
];

const jokers = [
    'joker of clubs', 'joker of spades', 'joker of hearts', 'joker of diamonds'
];

// create arrays for decks used behind the scenes
const fiftyTwoCardDeck = [];

const fullDeck = [];

// create objects for decks used by user
const playingDeck = {
    cards: []
};

const hand = {
    cards: []
};

// setup basic functions
let barker = (input) => {
    console.log(input);
    alert(input);
}

let createDeck = (donorDeck, recieveDeck) => {
    for (let cardID = 0; cardID < donorDeck.length; cardID++) {
        // console.log(donorDeck[cardID])
        recieveDeck.push(donorDeck[cardID]);
    }
    // console.log(recieveDeck);
}

let drawFromDeckTop = (num) => {
    for (let repeat = 0; repeat <= parseInt(num); num++) {
        let card = playingDeck.cards.shift();
        // console.log('This is your deck: ' + deck.cards);
        hand.cards.unshift(card);
        // console.log('This is your hand: ' + hand.cards);
    }
    barker(hand.cards);
}

// let addToDeckBottom = (obj) => {
//     deck.cards.push(obj);
//     // console.log('This is your deck: ' + deck.cards);
// }

createDeck(diamonds, fiftyTwoCardDeck);
createDeck(hearts, fiftyTwoCardDeck);
createDeck(spades, fiftyTwoCardDeck);
createDeck(clubs, fiftyTwoCardDeck);
// barker(fiftyTwoCardDeck);

createDeck(fiftyTwoCardDeck, fullDeck);
createDeck(jokers, fullDeck);
// barker(fullDeck);

prompt("Between the fullDeck and fiftyTwoCardDeck which would you like to use")
// if ()
createDeck(fullDeck, playingDeck.cards);
// barker(playingDeck.cards);

// draw a card
// drawFromDeckTop(1);