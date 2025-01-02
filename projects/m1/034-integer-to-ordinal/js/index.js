

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const ordinalNumbers = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    7: "seventh",
    8: "eighth",
    9: "ninth",
    10: "tenth",
    11: "eleventh",
    12: "twelfth"
  };
  




async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const num= await getInput(rl); 
        console.log(`the ordinalNumber to ${num} is ${ordinalNumbers[num]}`);
     
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
   
  
   const input = await rl.question(`Please enter a number between 1 and 12: `)
    const inputNumber = Number.parseInt(input,10);
   if(Number.isInteger(inputNumber) && (inputNumber >=1 && inputNumber <= 12)){
    return inputNumber;
   }
   
   let result = "Please enter a number less or equal than 12"
   if(Number.isNaN(inputNumber)){
    result = 'Please enter a number'
   }
   else if(inputNumber < 1){
    result = "Please enter a number from 1 to 12"
   }
    console.log(result);
     return getInput(rl);

}
