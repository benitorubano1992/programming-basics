const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



const VALID={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8
};














async function main() {
const rl = readline.createInterface({ input, output });
 try{
   
    const strin = await getInput(rl);
    const result = getCell(strin);
    
    console.log(`
        INPUT: ${strin},
        OUTPUT:${result}
    `);

  

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





function getCell(cell){
    const [first,second]=cell.split('');
    let numSec = Number.parseInt(second,10);
    console.log(first,VALID[first]);
    if(VALID[first] % 2 !== 0){
        console.log(cell,'disp');
        return numSec % 2 === 0 ? 'white':'black'
    }
    else{
        console.log(cell,'par')
        return  numSec % 2 === 0 ? 'black':'white'
    }

}


    async function getInput(rl){
     const input = await rl.question(`Please enter a cell: `)
     //const inputNumber = Number.parseInt(input,10);
    //const inputNumber = input *1;
        let lowerInput = input.toLowerCase();

      
    if(VALID[lowerInput.at(0)] && (Number.parseInt(input.at(1)) >= 0 &&Number.parseInt(input.at(1)) <= 8) && input.length===2){
        return lowerInput;
    }
    /*if(!Number.isNaN(inputNumber) || input.length > 1){
        console.log(`Please enter a valid character`);
        return getInput(rl);
    }*/
   return getInput(rl);
   
   
   
   
 }