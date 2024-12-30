const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



const MINUTES = 50;
const TEXTNUM = 50;
const FEEMinutes = 0.25;
const FEEMessages = 0.15;
const FEE911= 0.44;
const  BASECHARGE = 15;
const TAX = 0.05;



async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
        const minutes = await getInput(rl,'minutes');
        const messages= await getInput(rl,'messages');

        const extraMinutes = minutes - MINUTES;
        const extraMsg = messages - TEXTNUM;
        const extraChargeM = extraMinutes >= 0 ? extraMinutes *  FEEMinutes : 0;
        const extraChargeMsg = extraMsg >= 0 ? extraMsg *FEEMessages:0;

        let total = BASECHARGE + extraChargeM + extraChargeMsg + FEE911;
        let tax = total * TAX;
        total += tax;

        console.log(`
            Base charge: ${BASECHARGE}$,
            Extra minutes :${extraChargeM}$,
            Extra messages: ${extraChargeMsg}$,
            911 FEE: ${FEE911}$,
            TAX:${tax.toFixed(2)}$,
            Total bill amount:${total.toFixed(2)}$

        `);
       
       

            
    
      
    
      
    
        //const result = 0;
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,type){
    const input = await rl.question(`Please enter the number of ${type}: `)
    const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;

    if(!Number.isNaN(inputNumber) && Number.isInteger(inputNumber)&& inputNumber >= 0){
        return inputNumber;
    }
     
  
   /*if(!Number.isNaN(inputNumber) || input.length > 1){
       console.log(`Please enter a valid character`);
       return getInput(rl);
   }*/
  return getInput(rl,type);
  
  
  
  
}










