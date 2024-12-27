const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const VOWELS =["a","e","i","o","u"];

let validMonths=[];
for(let i = 1; i <= 12; i++){
    validMonths.push(`${i>=10? i:`0${i}`}`)
}







async function main() {
const rl = readline.createInterface({ input, output });
 try{
    console.log(`Valid months are ${validMonths.join(',')} \n`);
    
    const strin = await getInput(rl);

    const days= getDays(strin);
    console.log(`the month ${strin} has ${days}`);

  

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



function getBisestile(year){
    let isSecolare = year % 100 === 0;
    return (!isSecolare && year % 4 ===0) || (isSecolare && year % 400 === 0)
}


function getDays(string){
    if(["11","04","06","09"].includes(string)){
        return 30;
    }
    else if(string ==="02"){
        const date = new Date();
        const year = date.getFullYear();
        const isBisestile = getBisestile(year);
        return isBisestile ? 29:28;
    }
    else {
        return 31
    }

}




    async function getInput(rl){
     const input = await rl.question(`Please enter a month: `)
     //const inputNumber = Number.parseInt(input,10);
    //const inputNumber = input *1;
      
    if(validMonths.includes(input.toLowerCase())){
        return input.toLowerCase();
    }
    /*if(!Number.isNaN(inputNumber) || input.length > 1){
        console.log(`Please enter a valid character`);
        return getInput(rl);
    }*/
   return getInput(rl);
   
   
   
   
 }