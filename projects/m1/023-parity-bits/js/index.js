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


    function getParity(array){
        count0=0;
        count1=0;
        array.forEach(element => {
            if(element === '0'){
                count0++;
            }
            else{
                count1++
            }    
        });
    
        let result = "either the number of 0 or 1 is even";
        if(count0 % 2 === 0){
            result = "the numbe of 0 is even"
        }
        else if(count1% 2 === 0){
        result = "the numbe of 1 is even"
        }
        return result;
    
    }


async function getInput(rl,count=0){
   
  
  
   const input = await rl.question(`Please enter the sequence of bits: `)
   const inputSequence = input.match(/[0,1]/g);
   
   //const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;
    if(count > 0 && input.trim().length === 0){
        return;
    }

    let result = "";

    if(input.length < 8 || input.length > 8){
        result = "Please enter a sequnce of 8 bits";
    }
    else if(inputSequence=== null || inputSequence.length < 8){
        result = "Please enter a sequnce of 8 bits of 0,1";
    }
    else{
        result =getParity(inputSequence);
        count++;
    }
    console.log(result)


  
     return getInput(rl,count);

     
   

  
  
  
  
  
}


