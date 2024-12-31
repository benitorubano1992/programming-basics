const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const BASE = 4;
const overPrice = 0.25;
const numDiv = 140;


function getPrice(numKm){
    const numMeter = numKm * 1000;
    const price= BASE + (numMeter / numDiv ) * overPrice;
    return `the fee of the course ${price.toFixed(2)}`;
}




async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       await getInput(rl);
    }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl){
   const input = await rl.question(`Please enter the number of km (blank space for quit) : `)
   const inputNumber = Number.parseInt(input);
   
   if(input.trim().length === 0){
        return;
    }

    let result = 'Please enter a valid number of km';

    if(Number.isInteger(inputNumber) && inputNumber>= 0){
        result = getPrice(inputNumber);
    }
    console.log(result);
    
     return getInput(rl);

    }


