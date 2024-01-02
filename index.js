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

const fiftyTwoCardDeck = ['ace of diamonds', 'two of diamonds', 'three of diamonds', 'four of diamonds', 'five of diamonds', 'six of diamonds', 'seven of diamonds', 'eight of diamonds', 'nine of diamonds', 'ten of diamonds', 'jack of diamonds', 'queen of diamonds', 'king of diamonds', 'ace of hearts', 'two of hearts', 'three of hearts', 'four of hearts', 'five of hearts', 'six of hearts', 'seven of hearts', 'eight of hearts', 'nine of hearts', 'ten of hearts', 'jack of hearts', 'queen of hearts', 'king of hearts', 'ace of spades', 'two of spades', 'three of spades', 'four of spades', 'five of spades', 'six of spades', 'seven of spades', 'eight of spades', 'nine of spades', 'ten of spades', 'jack of spades', 'queen of spades', 'king of spades', 'ace of clubs', 'two of clubs', 'three of clubs', 'four of clubs', 'five of clubs', 'six of clubs', 'seven of clubs', 'eight of clubs', 'nine of clubs', 'ten of clubs', 'jack of clubs', 'queen of clubs', 'king of clubs'];

const fullDeck = ['ace of diamonds', 'two of diamonds', 'three of diamonds', 'four of diamonds', 'five of diamonds', 'six of diamonds', 'seven of diamonds', 'eight of diamonds', 'nine of diamonds', 'ten of diamonds', 'jack of diamonds', 'queen of diamonds', 'king of diamonds', 'ace of hearts', 'two of hearts', 'three of hearts', 'four of hearts', 'five of hearts', 'six of hearts', 'seven of hearts', 'eight of hearts', 'nine of hearts', 'ten of hearts', 'jack of hearts', 'queen of hearts', 'king of hearts', 'ace of spades', 'two of spades', 'three of spades', 'four of spades', 'five of spades', 'six of spades', 'seven of spades', 'eight of spades', 'nine of spades', 'ten of spades', 'jack of spades', 'queen of spades', 'king of spades', 'ace of clubs', 'two of clubs', 'three of clubs', 'four of clubs', 'five of clubs', 'six of clubs', 'seven of clubs', 'eight of clubs', 'nine of clubs', 'ten of clubs', 'jack of clubs', 'queen of clubs', 'king of clubs', 'joker of clubs', 'joker of spades', 'joker of hearts', 'joker of diamonds'];

const playingDeck = {
    cards: []
};

const hand = {
    cards: []
};

// let createDeck = (donorDeck, recieveDeck) => {
//     for (let cardID of donorDeck) {
//         console.log(donorDeck[cardID])
//         recieveDeck.push(donorDeck[cardID]);
//     }
//     console.log(recieveDeck);
// }

let addToDeckBottom = (obj) => {
    deck.cards.push(obj);
    // console.log('This is your deck: ' + deck.cards);
}

let drawFromDeckTop = (num) => {
    let card = deck.cards.shift();
    // console.log('This is your deck: ' + deck.cards);
    hand.cards.unshift(card);
    console.log('This is your hand: ' + hand.cards);
}

for (let cardID = 0; cardID < fullDeck.length; cardID += 1) {
    console.log(fullDeck[cardID])
    playingDeck.cards.push(fullDeck[cardID]);
}

// createDeck(fullDeck, playingDeck.cards);

// console.log(playingDeck.cards);

// draw a card
// console.log('you drew a card');
// drawFromDeckTop();