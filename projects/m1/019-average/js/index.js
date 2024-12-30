const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



async function main() {

  
    const rl = readline.createInterface({ input, output });
 try{
   const result = await getInput(rl);
    const sum = result.reduce((acc,next)=>{
            return acc + next
        },0) 

    
        console.log(`average value is ${Math.floor(sum / result.length)}`);
  

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








    async function getInput(rl,array=[]){
     const input = await rl.question(`Please enter a number: `)
     const inputNumber = Number.parseInt(input,10);
    //const inputNumber = input *1;

    if(array.length >0 && inputNumber ===0 && !Number.isNaN(input)){
        return array;
    }
    
    result =''
      
    if(inputNumber > 0){
       array.push(inputNumber);
    }
    else if(inputNumber === 0){
       result='Please enter at least a  number > 0';
    }
    else if(Number.isNaN(inputNumber)){
        result = 'Please enter a valid number'
    }

    /*if(!Number.isNaN(inputNumber) || input.length > 1){
        console.log(`Please enter a valid character`);
        return getInput(rl);
    }*/

   console.log(result);     
   return getInput(rl,array);
   
   
   
   
 }