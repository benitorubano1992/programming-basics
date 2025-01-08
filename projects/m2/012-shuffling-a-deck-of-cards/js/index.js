//“T”, “J”, “Q”, “K” and “A” are used to represent the values 10, Jack, Queen, King and Ace respectively. 
//“s” for spades, “h” for hearts, “d” for diamonds and “c” for clubs
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }



const DECK=[2,3,4,5,6,7,8,9,'T','J','Q','K','A'];
const types=["s",'h','d','c'];

function createDeck(){
    const result=[];
    for(let i = 0; i < types.length; i++){
        const type= types[i];
        for(let j = 0; j < DECK.length; j++){
            result.push(`${DECK[j]}${type}`)
        }
    }
    return result;
}


function mygenShuffleDeck(deck){
    for(let i = 0; i < deck.length; i++){
        const start= i;
        const end = getRandomIntInclusive( start,deck.length - 1); 
        const actual = deck[i];
        const final= deck[end]
        deck[start]= final;
        deck[end]= actual;
    }
    return deck;
}

const myDeck= createDeck();
console.log(myDeck);

const shuffleDeck= mygenShuffleDeck(myDeck);
console.log(shuffleDeck);




