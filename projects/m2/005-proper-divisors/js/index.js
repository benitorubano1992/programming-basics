const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function getProperDivors(num){
    const result=[];
    
    for(let i = 0; i < num;i++){
            const div = num / i;
            if(num % i === 0 && div % 2=== 0){
                result.push(i)
            }

    }
    return result;
}







async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const result=await getInput(rl);
        const properDivisors= getProperDivors(result);
        if(properDivisors.length > 0)
        console.log(`proper divisors of ${result} are: ${properDivisors.join('\n')}`);    
        else{
            console.log('there aren\'t proper divisor of ' + result)
        }
     
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
    //const inputNumber = Number.parseInt(input,10);
   const inputNumber = Number(input,10);

   if(!Number.isNaN(inputNumber)){
    return inputNumber;
   }
    console.log("Please Enter a valid number")
    return getInput(rl);

}