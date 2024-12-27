const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
const rl = readline.createInterface({ input, output });
 try{
    const stringNum = await getInput(rl);
//const result = 0;
 const result = getSum(`${stringNum}`);
console.log(`the sum of the digit of ${stringNum} is ${result}`);
 }
 catch(e){
    console.log(e)
 }
 finally{
    rl.close();
 }

}
main();

const getSum=(value)=>{
   let sum = 0;
   for(let i = 0; i < value.length;i++){
    sum+=Number.parseInt(value[i]);
   }
   return sum;
}



    async function getInput(rl){
     const input = await rl.question(`Please enter the integer number: `)
     //const inputNumber = Number.parseInt(input,10);
    const inputNumber = input *1;
        
    if(Number.isNaN(inputNumber) || !Number.isInteger(inputNumber || inputNumber < 0)){
        console.log(`Please enter a valid integer`);
        return getInput(rl);
    }
   
    return inputNumber;
   
   
   
   
 }