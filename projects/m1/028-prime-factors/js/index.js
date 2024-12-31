const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



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


function getPrimeFactors(input,count=2){
    if(input === 1){
        return;
    }
    let isFactor= input % count === 0;
    let newInput = input;
    if(isFactor){
        console.log(count);
        newInput = input / count;
    }else{
        count++;
    }
    return getPrimeFactors(newInput,count);
   }

async function getInput(rl){
   
  
   const input = await rl.question(`Please enter the Number: `)
    const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1

    if(input.trim().length === 0){
        return;
    }


    if(Number.isInteger(inputNumber) && inputNumber>0){
        getPrimeFactors(inputNumber);
    }
    else{
        console.log('Please enter a valid number');
    }

 return getInput(rl);

}


