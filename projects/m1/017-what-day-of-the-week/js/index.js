const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


const DAYS=['Monday','Tuesday', 'Wednesday','Thursday', 'Friday','Saturday','Sunday'];



const getMonday=(year)=>{
    //return (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7

    const day = (((year - 1) * 365) + ((year - 1) / 4) - ((year - 1) / 100) + ((year) / 400) + 1) % 7;
    return day;
}


async function main() {
const rl = readline.createInterface({ input, output });
 try{
   
    const year = await getInput(rl);
    const indexDay= getMonday(year);
    console.log({indexDay,giorno:DAYS[indexDay]});
   
    

  

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
     const input = await rl.question(`Please enter a note: `)
     const inputNumber = Number.parseInt(input,10);
    //const inputNumber = input *1;


     if(!Number.isNaN(inputNumber) && Number.isInteger(inputNumber) && inputNumber > 0){
        return inputNumber;
     } 
   
    /*if(!Number.isNaN(inputNumber) || input.length > 1){
        console.log(`Please enter a valid character`);
        return getInput(rl);
    }*/
   return getInput(rl);
   
   
   
   
 }