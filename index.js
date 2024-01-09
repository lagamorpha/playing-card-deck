// create playing decks
const fullDeck = [
    {
        name: 'ace of diamonds',
        suit: 'diamonds',
        face: 'ace',
        value: 1
    },
    {
        name: 'two of diamonds',
        suit: 'diamonds',
        face: 'two',
        value: 2
    },
    {
        name: 'three of diamonds',
        suit: 'diamonds',
        face: 'three',
        value: 3
    },
    {
        name: 'four of diamonds',
        suit: 'diamonds',
        face: 'four',
        value: 4
    },
    {
        name: 'five of diamonds',
        suit: 'diamonds',
        face: 'five',
        value: 5
    },
    {
        name: 'six of diamonds',
        suit: 'diamonds',
        face: 'six',
        value: 6
    },
    {
        name: 'seven of diamonds',
        suit: 'diamonds',
        face: 'seven',
        value: 7
    },
    {
        name: 'eight of diamonds',
        suit: 'diamonds',
        face: 'eight',
        value: 8
    },
    {
        name: 'nine of diamonds',
        suit: 'diamonds',
        face: 'nine',
        value: 9
    },
    {
        name: 'ten of diamonds',
        suit: 'diamonds',
        face: 'ten',
        value: 10
    },
    {
        name: 'jack of diamonds',
        suit: 'diamonds',
        face: 'jack',
        value: 11
    },
    {
        name: 'queen of diamonds',
        suit: 'diamonds',
        face: 'queen',
        value: 12
    },
    {
        name: 'king of diamonds',
        suit: 'diamonds',
        face: 'king',
        value: 13
    },
    {
        name: 'joker of diamonds',
        suit: 'diamonds',
        face: 'joker',
        value: 0
    },
    {
        name: 'ace of hearts',
        suit: 'hearts',
        face: 'ace',
        value: 1
    },
    {
        name: 'two of hearts',
        suit: 'hearts',
        face: 'two',
        value: 2
    },
    {
        name: 'three of hearts',
        suit: 'hearts',
        face: 'three',
        value: 3
    },
    {
        name: 'four of hearts',
        suit: 'hearts',
        face: 'four',
        value: 4
    },
    {
        name: 'five of hearts',
        suit: 'hearts',
        face: 'five',
        value: 5
    },
    {
        name: 'six of hearts',
        suit: 'hearts',
        face: 'six',
        value: 6
    },
    {
        name: 'seven of hearts',
        suit: 'hearts',
        face: 'seven',
        value: 7
    },
    {
        name: 'eight of hearts',
        suit: 'hearts',
        face: 'eight',
        value: 8
    },
    {
        name: 'nine of hearts',
        suit: 'hearts',
        face: 'nine',
        value: 9
    },
    {
        name: 'ten of hearts',
        suit: 'hearts',
        face: 'ten',
        value: 10
    },
    {
        name: 'jack of hearts',
        suit: 'hearts',
        face: 'jack',
        value: 11
    },
    {
        name: 'queen of hearts',
        suit: 'hearts',
        face: 'queen',
        value: 12
    },
    {
        name: 'king of hearts',
        suit: 'hearts',
        face: 'king',
        value: 13
    },
    {
        name: 'joker of hearts',
        suit: 'hearts',
        face: 'joker',
        value: 0
    },
    {
        name: 'ace of spades',
        suit: 'spades',
        face: 'ace',
        value: 1
    },
    {
        name: 'two of spades',
        suit: 'spades',
        face: 'two',
        value: 2
    },
    {
        name: 'three of spades',
        suit: 'spades',
        face: 'three',
        value: 3
    },
    {
        name: 'four of spades',
        suit: 'spades',
        face: 'four',
        value: 4
    },
    {
        name: 'five of spades',
        suit: 'spades',
        face: 'five',
        value: 5
    },
    {
        name: 'six of spades',
        suit: 'spades',
        face: 'six',
        value: 6
    },
    {
        name: 'seven of spades',
        suit: 'spades',
        face: 'seven',
        value: 7
    },
    {
        name: 'eight of spades',
        suit: 'spades',
        face: 'eight',
        value: 8
    },
    {
        name: 'nine of spades',
        suit: 'spades',
        face: 'nine',
        value: 9
    },
    {
        name: 'ten of spades',
        suit: 'spades',
        face: 'ten',
        value: 10
    },
    {
        name: 'jack of spades',
        suit: 'spades',
        face: 'jack',
        value: 11
    },
    {
        name: 'queen of spades',
        suit: 'spades',
        face: 'queen',
        value: 12
    },
    {
        name: 'king of spades',
        suit: 'spades',
        face: 'king',
        value: 13
    },
    {
        name: 'joker of spades',
        suit: 'spades',
        face: 'joker',
        value: 0
    },
    {
        name: 'ace of clubs',
        suit: 'clubs',
        face: 'ace',
        value: 1
    },
    {
        name: 'two of clubs',
        suit: 'clubs',
        face: 'two',
        value: 2
    },
    {
        name: 'three of clubs',
        suit: 'clubs',
        face: 'three',
        value: 3
    },
    {
        name: 'four of clubs',
        suit: 'clubs',
        face: 'four',
        value: 4
    },
    {
        name: 'five of clubs',
        suit: 'clubs',
        face: 'five',
        value: 5
    },
    {
        name: 'six of clubs',
        suit: 'clubs',
        face: 'six',
        value: 6
    },
    {
        name: 'seven of clubs',
        suit: 'clubs',
        face: 'seven',
        value: 7
    },
    {
        name: 'eight of clubs',
        suit: 'clubs',
        face: 'eight',
        value: 8
    },
    {
        name: 'nine of clubs',
        suit: 'clubs',
        face: 'nine',
        value: 9
    },
    {
        name: 'ten of clubs',
        suit: 'clubs',
        face: 'ten',
        value: 10
    },
    {
        name: 'jack of clubs',
        suit: 'clubs',
        face: 'jack',
        value: 11
    },
    {
        name: 'queen of clubs',
        suit: 'clubs',
        face: 'queen',
        value: 12
    },
    {
        name: 'king of clubs',
        suit: 'clubs',
        face: 'king',
        value: 13
    },
    {
        name: 'joker of clubs',
        suit: 'clubs',
        face: 'joker',
        value: 0
    },
]

const fiftyTwo = fullDeck.filter(card => card.face !== 'joker')

// setup basic functions
const barker = (deck) => {
    console.log(deck.name);
    confirm(deck.name);
}

barker(fiftyTwo);
barker(fullDeck);

// const drawFromDeckTop = (num) => {
//     for (let repeat = 0; repeat <= parseInt(num); num++) {
//         let card = playingDeck.cards.shift();
//         // console.log('This is your deck: ' + deck.cards);
//         hand.cards.unshift(card);
//         // console.log('This is your hand: ' + hand.cards);
//     }
//     barker(`here is your hand: ${hand.cards}`);
// }

// const addToDeckBottom = (obj) => {
//     deck.cards.push(obj);
//     // console.log('This is your deck: ' + deck.cards);
// }

// create playing deck

// let input = prompt("Between the fullDeck and fiftyTwo which would you like to use?");
// console.log(input);
// if (input === 'fullDeck') {
//     const playingDeck = fullDeck.map(function (card) {
//         return card;
//     });
//     barker(`here is your deck: ${playingDeck.cards}`);
// } else if (input === 'fiftyTwo') {
//     const playingDeck = fiftyTwo.map(function (card) {
//         return card;
//     });
//     barker(`here is your deck: ${playingDeck.cards}`);
// } else {
//     const playingDeck = fullDeck.map(function (card) {
//         return card;
//     });
//     barker(`here is your deck: ${playingDeck.cards}`);
// }

// draw a card
// drawFromDeckTop(1);


