const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


const map={
    'A':10,
    'B':11,
    'C':12,
    'D':13,
    'E':14,
    'F':15
}


function int2hex(value){
    const inputNumber = Number.parseInt(value);
    if(Number.isNaN(inputNumber)){
        return map[value.toUpperCase()]
    }
    return inputNumber;
}

function getHexVal(value){
    const inputNumber = Number.parseInt(value);
    if(inputNumber < 9){
        return inputNumber
    };

    for(let key in map){
        if(map[key]=== inputNumber){
            return key;
        }else if(key === value){
            return key;
        }

    }


}







async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
        const value=await getInput(rl);
        const intVal = int2hex(value);
        const hexVal = getHexVal(value);

       
        
        console.log(`the value ${value} is ${intVal} in int2hex , and equals to ${hexVal} in hex2int`)
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,type,month=""){
   
  
   const input = await rl.question(`Please enter the single digit of conversione: `)
   const inputNumber = Number.parseInt(input,10); 
   //const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;
    if((inputNumber >= 0 && inputNumber <= 15) || (["A","B","C","D","E","F"].includes(input))){
        return input;
    }

   

    console.log(`Please enter a valid ${type}`);
     return getInput(rl,type,month);

     
   
   /*if(!Number.isNaN(inputNumber) || input.length > 1){
       console.log(`Please enter a valid character`);
       return getInput(rl);
   }*/
  
  
  
  
  
}





