const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


function getBinary(num,result=''){
    if(num === 0){
        return result;
    }
    const div = Math.floor(num / 2);
    const rest = num % 2;
    result = `${rest}${result}`

    return getBinary(div,result)
}


async function main() {
    const rl = readline.createInterface({ input, output });

    
  const number = await getInput(rl);
  const binaryNum= getBinary(number); 
  
  console.log(`the number ${number} in binary is ${binaryNum}`)

    rl.close()
  //const bottleDeposit = await getInput ('length',rl);
  
  //console.log(`area della staza di lunghezza ${length}, larghezza:${width} è :${area} metri quadrati`);
}
main();




async function getInput(rl){
    const input = await rl.question(`Please enter the  number: `)
    const inputNumber = Number(input,10);
    if(!Number.isNaN(inputNumber)){
        return inputNumber;
    }
       return getInput(rl,sum)
   
   
    }
   



   
  
