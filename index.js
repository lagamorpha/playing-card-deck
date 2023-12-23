const deck = [];

let addToDeckBottom = (obj) => {
    deck.push(obj);
    console.log(deck);
}

let drawFromDeckTop = () => {
    deck.shift();
    console.log(deck);
}

// add hearts suit (long method)
console.log('card added to bottom of deck');
addToDeckBottom('ace of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('two of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('three of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('four of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('five of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('six of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('seven of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('eight of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('nine of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('ten of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('jack of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('queen of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('king of hearts');
console.log('card added to bottom of deck');
addToDeckBottom('joker of hearts');

