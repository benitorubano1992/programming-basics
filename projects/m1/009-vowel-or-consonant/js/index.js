const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const VOWELS =["a","e","i","o","u"];




async function main() {
const rl = readline.createInterface({ input, output });
 try{
    const strin = await getInput(rl);
let result=`the letter ${strin} is a consonant`;
if(VOWELS.includes(strin)){
    result = `the letter ${strin} is a vowel`
}
else if(strin === 'y'){
    result = `sometimes y is a vowel, and sometimes y is a consonant`
}
console.log(result);

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





    async function getInput(rl){
     const input = await rl.question(`Please enter a letter of the alphabet: `)
     //const inputNumber = Number.parseInt(input,10);
    const inputNumber = input *1;
        
    if(!Number.isNaN(inputNumber) || input.length > 1){
        console.log(`Please enter a valid character`);
        return getInput(rl);
    }
   
    return input.toLowerCase();
   
   
   
   
 }