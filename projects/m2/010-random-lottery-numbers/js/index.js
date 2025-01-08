//In order to win the top prize in a particular lottery, one must match all 6 numbers on his or her ticket to 
//the 6 numbers between 1 and 49 that are drawn by the lottery organizer.   
//Write a program that generates a random selection of 6 numbers for a lottery ticket. 
//Ensure that the 6 numbers selected do not contain any duplicates.  
//Display the numbers in ascending order.

const MIN_VALUES= 1;
const MAX_VALUES=49;
const END_GAME = 6;


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }


  function main(){
    const ticket = getTicket();
    const ticketAsc = ticket.sort((a,b)=>a - b)
    console.log(ticketAsc.join('\n'));

  }
main();

function getTicket(result=[]){

    if(result.length === END_GAME ){
        return result;
    }

    const value = getRandomIntInclusive(MIN_VALUES,MAX_VALUES);
    if(!result.includes(value)){
        result.push(value)
    }
    return getTicket(result)
}