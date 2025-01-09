const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const letter_num={
    "A": 1,
    "E": 1,
    "I": 1,
    "L": 1,
    "N": 1,
    "O": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10
  }

function getNumChar(strInput){
    return strInput.split('').reduce((acc,next)=>{
        return acc += (acc[next.toUpperCase()] ?? 0)

    },0)

}


  async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const strInput= await getInput(rl); 
       const totValues=getNumChar(strInput); 
       console.log(`the string ${strInput} equals to ${totValues}`);
     
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
   
  
   const input = await rl.question(`Please enter a string: `)
    if(input.trim().length > 0){
        return input
    }
    return getInput(rl);

}