const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
    console.log("rules:\nEnter the sequence of numbers\n Enter the blank line for having the total");
  const rl = readline.createInterface({ input, output });

    
  const sum = await getInput(rl);
    console.log(`the sum of the number entered is ${sum}`)

    rl.close()
  //const bottleDeposit = await getInput ('length',rl);
  
  //console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();




async function getInput(rl,sum = 0){
    const input = await rl.question(`Please enter the number `)
    const inputNumber = Number(input,10);
    if(input.trim().length === 0){
        return sum;
        }
        if(!Number.isNaN(inputNumber)){
            sum+= inputNumber
        }
       else{
        console.log('Please dont enter a string');     
       }
       
       return getInput(rl,sum)
   
   
    }
   



   
  
