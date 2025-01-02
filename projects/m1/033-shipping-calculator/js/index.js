

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const FIRST_PRICE = 10.99;
const BASE_PRICE = 2.99;
  


function getPrice(numItems){
    if(numItems === 0){
        return 0;
    }
    return 1 * FIRST_PRICE + (numItems - 1) * BASE_PRICE;
}

async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const numItems= await getInput(rl); 
      const priceShip = getPrice(numItems);
     console.log(`the price for shipping ${numItems} is ${priceShip.toFixed(2)}$`)
     
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
   
  
   const input = await rl.question(`Please enter the number of items: `)
    const inputNumber = Number.parseInt(input,10);
   if(Number.isInteger(inputNumber) && inputNumber >=0){
    return inputNumber;
   }
   
    console.log(`Please enter a valid number of items`);
     return getInput(rl);

}






