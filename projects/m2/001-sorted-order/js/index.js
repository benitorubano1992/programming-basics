const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


const getSort=(array)=>{
    array.sort((a,b)=>a -b)
    return array

}



async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

        const arrayRes=await getInput(rl);
        const sortArray= getSort([...arrayRes]);
        const stringResult= sortArray.join('\n');
        console.log(stringResult);
      
     
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
    const inputNumber = Number.parseInt(input,10);
   
    if(inputNumber === 0){
        return result
    }
    
    if(!Number.isNaN(inputNumber)){
        result.push(inputNumber);
    }
    else{
        console.log('you dont have netered a number,please enter a number')
    }
   
    return getInput(rl,result);

     
   
}


