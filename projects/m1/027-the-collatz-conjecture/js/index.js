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




async function getInput(rl){
   
  
   const input = await rl.question(`Please enter the number: `)
    const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;

    if(inputNumber <= 0&& !Number.isNaN(inputNumber) ){
        return;
    }


    if(inputNumber > 0){
        getCollatz(inputNumber);
    }
    else if(Number.isNaN(inputNumber)){
        console.log(`Please enter a valid number`);
    }


return getInput(rl);

     
   
   /*if(!Number.isNaN(inputNumber) || input.length > 1){
       console.log(`Please enter a valid character`);
       return getInput(rl);
   }*/
  
  
  
  
  
}


function getCollatz(inputNumer){
    console.log(inputNumer);
    if(inputNumer === 1){
       
        return;
    }
    let newNumber = inputNumer % 2 === 0 ? Math.floor(inputNumer / 2) : (inputNumer * 3 + 1)

    return getCollatz(newNumber);
}