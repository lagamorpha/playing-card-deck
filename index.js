const deck = [];

let addToDeckBottom = (obj) => {
    deck.push(obj);
    // console.log(deck);
}

let drawFromDeckTop = () => {
    deck.shift();
    console.log(deck);
}

// // add hearts suit (long method)
// console.log('card added to bottom of deck');
// addToDeckBottom('ace of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('two of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('three of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('four of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('five of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('six of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('seven of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('eight of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('nine of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('ten of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('jack of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('queen of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('king of hearts');
// console.log('card added to bottom of deck');
// addToDeckBottom('joker of hearts');
// console.log(deck);

// // add hearts suit (short method)
// console.log('cards added to bottom of deck');
// addToDeckBottom('ace of hearts');
// addToDeckBottom('two of hearts');
// addToDeckBottom('three of hearts');
// addToDeckBottom('four of hearts');
// addToDeckBottom('five of hearts');
// addToDeckBottom('six of hearts');
// addToDeckBottom('seven of hearts');
// addToDeckBottom('eight of hearts');
// addToDeckBottom('nine of hearts');
// addToDeckBottom('ten of hearts');
// addToDeckBottom('jack of hearts');
// addToDeckBottom('queen of hearts');
// addToDeckBottom('king of hearts');
// addToDeckBottom('joker of hearts');
// console.log(deck);

// add all suits
// diamonds
addToDeckBottom('ace of diamonds');
addToDeckBottom('two of diamonds');
addToDeckBottom('three of diamonds');
addToDeckBottom('four of diamonds');
addToDeckBottom('five of diamonds');
addToDeckBottom('six of diamonds');
addToDeckBottom('seven of diamonds');
addToDeckBottom('eight of diamonds');
addToDeckBottom('nine of diamonds');
addToDeckBottom('ten of diamonds');
addToDeckBottom('jack of diamonds');
addToDeckBottom('queen of diamonds');
addToDeckBottom('king of diamonds');
addToDeckBottom('joker of diamonds');
// clubs
addToDeckBottom('ace of clubs');
addToDeckBottom('two of clubs');
addToDeckBottom('three of clubs');
addToDeckBottom('four of clubs');
addToDeckBottom('five of clubs');
addToDeckBottom('six of clubs');
addToDeckBottom('seven of clubs');
addToDeckBottom('eight of clubs');
addToDeckBottom('nine of clubs');
addToDeckBottom('ten of clubs');
addToDeckBottom('jack of clubs');
addToDeckBottom('queen of clubs');
addToDeckBottom('king of clubs');
addToDeckBottom('joker of clubs');
// hearts
addToDeckBottom('ace of hearts');
addToDeckBottom('two of hearts');
addToDeckBottom('three of hearts');
addToDeckBottom('four of hearts');
addToDeckBottom('five of hearts');
addToDeckBottom('six of hearts');
addToDeckBottom('seven of hearts');
addToDeckBottom('eight of hearts');
addToDeckBottom('nine of hearts');
addToDeckBottom('ten of hearts');
addToDeckBottom('jack of hearts');
addToDeckBottom('queen of hearts');
addToDeckBottom('king of hearts');
addToDeckBottom('joker of hearts');
// spades
addToDeckBottom('ace of spades');
addToDeckBottom('two of spades');
addToDeckBottom('three of spades');
addToDeckBottom('four of spades');
addToDeckBottom('five of spades');
addToDeckBottom('six of spades');
addToDeckBottom('seven of spades');
addToDeckBottom('eight of spades');
addToDeckBottom('nine of spades');
addToDeckBottom('ten of spades');
addToDeckBottom('jack of spades');
addToDeckBottom('queen of spades');
addToDeckBottom('king of spades');
addToDeckBottom('joker of spades');

console.log(deck);

// draw a card
console.log('you drew a card');
drawFromDeckTop();