const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');











async function main() {
    console.log(`rukles:
        enter a string value, enter a blank if you want to quit the game`)
    
    const rl = readline.createInterface({ input, output });
     try{
       const result=await getInput(rl);
        console.log(result.join(' '));
        
      
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,result=[]){
   
   const input = await rl.question(`Please enter the number: `)
    //const inputNumber = Number.parseInt(input,10);
  // const inputNumber = Number(input,10);

    if(input.length === 0){
        return result
    }
    
    let isPresent = result.find(el=> el.toLowerCase()=== input.toLowerCase());
    if(!isPresent){
        result.push(input);
    }
    
   
    return getInput(rl,result);

}