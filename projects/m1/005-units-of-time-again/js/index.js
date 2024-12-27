const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const daySec= 24*60*60;
const hourSec= 60 *60;
const minutes= 60;

const getNum=(num)=>{
    if(num>=10){
        return num;
    }
    return `0${num}`;
}

async function main() {
   
  const rl = readline.createInterface({ input, output });
 
  const numSeconds= await getInput(rl);
    const numDays= Math.floor(numSeconds / daySec);
    const restD = numSeconds % daySec;
    const numH= Math.floor(restD / hourSec);
    const restH = restD % hourSec;
    const numM = Math.floor(restH / minutes);
    const numSec= restH % minutes;

    const result =`${numDays}:${getNum(numH)}:${getNum(numM)}:${getNum(numSec)}`;
  console.log(result);

rl.close();
  //const bottleDeposit = await getInput ('length',rl);
  
  //console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();



async function getInput(rl,value){
     const input = await rl.question(`Please enter the number of seconds: `)
     const inputNumber = Number.parseInt(input,10);
    if(Number.isInteger(inputNumber) && inputNumber > 0){
        return inputNumber;
    }
    
    console.log(`Please enter a valid integer for the seconds`);
    getInput(rl);
   
   
 }