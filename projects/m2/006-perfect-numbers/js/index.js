const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function getProperDivors(num){
    const result=[];
    
    for(let i = 0; i < num;i++){
            
            if(num % i === 0 ){
                result.push(i)
            }

    }
    return result;
}




function hasPerfectNumber(num,result){
    let sum = result.reduce((acc,next)=>{
        return acc + next
    },0)
    return sum === num
}



function getAllPerfectNumber(){
    const MIN = 1;
    const MAX = 10000;
    const cache={};
    for(let i = MIN;i < MAX; i++){
        cache[i]= getProperDivors(i)
        
    }

    let result = [];
    for(let key in cache){
        if(hasPerfectNumber(Number(key,10),cache[key])){
            result.push(key)
        }
    }
    return result;
    
   


}






async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const result=await getInput(rl);
        const properDivisors= getProperDivors(result);
        console.log({
            result,
            properDivisors
        })

        const isPerfectNumber = hasPerfectNumber(result,properDivisors)
        
        if(isPerfectNumber){
            console.log(`the number ${result} is a perfect number`)
        }
        else{
            console.log(`the number${result} is not a perfect number `)
        }
        
        console.log(`${getAllPerfectNumber().join('\n')}`)

     
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

   if(!Number.isNaN(inputNumber) && inputNumber > 0){
    return inputNumber;
   }
    console.log("Please Enter a valid number")
    return getInput(rl);

}