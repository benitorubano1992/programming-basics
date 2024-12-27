const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const daysInSec = 24 * 60* 60;
const hourInSec= 60 * 60;
const minutesInSec = 60;

const limit={
    hours:24,
    days:31,
    minutes:60,
    seconds:60
}


async function main() {
   
  const rl = readline.createInterface({ input, output });
 
  const days= await getInput(rl,"days");
  const hours= await getInput(rl,"hours");
  const minutes = await getInput(rl,"minutes");
  const seconds = await getInput(rl,"seconds");


  const totSeconds = days*daysInSec + hourInSec * hours + minutes*minutesInSec + seconds
    console.log(`days ${days},hours ${hours}, minutes ${minutes} , seconds: ${seconds} eqauls to ${totSeconds}`);
    rl.close();
  //const bottleDeposit = await getInput ('length',rl);
  
  //console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();



async function getInput(rl,value){
     const input = await rl.question(`Please enter a integer number of ${value}: `)
     const inputNumber = Number.parseInt(input,10);
    if(Number.isInteger(inputNumber) && inputNumber > 0 && inputNumber <= limit[value]){
        return inputNumber;
    }
    
    console.log(`Please enter a valid integer for the ${value}`);
    getInput(rl,value);
   
   
 }