const deck = [];

let addToDeckBottom = (obj) => {
    deck.push(obj);
    console.log(deck);
}

let drawFromDeckTop = () => {
    deck.shift();
    console.log(deck);
}

