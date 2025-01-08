const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

function getPrime(num){
    for(let i = 2; i < Math.floor(Math.sqrt(num));i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}


function getPrimeNumbers(maxLimit){
    const nonPrime=[];
    const primes=[];
    for(let i = 2; i < maxLimit;i++){
        if(nonPrime.includes(i)){
           
            continue;
        }
        else{
            primes.push(i)
            for(let j = i+ i; j < maxLimit; j+=i){
                nonPrime.push(j)
            }
        }
    }
    return primes;

}




//let prova ="Contractions include: don'''t, isn'''t, and would'''?t.";

//console.log(getPhraseList(prova));

async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const maxLimit=await getInput(rl);
      const primeList = getPrimeNumbers(maxLimit);
        console.log(`prime number between 2 and ${maxLimit} are: `);
        console.log(primeList.join('\n'));


     
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
    if(Number.isInteger(inputNumber) && inputNumber > 2){
        return inputNumber
    }

    console.log("Please Enter a valid number")
   return input;

}