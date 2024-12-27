const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


const notes={
    C:261.63,
    D:293.66,
    E: 329.63 ,
    F:349.23 ,
    G:392,
    A:440,
    B:493.88 

}










async function main() {
const rl = readline.createInterface({ input, output });
 try{
   
    const strin = await getInput(rl);

   
    const scala = Number.parseInt(strin.at(1),10); 
    const output = notes[strin[0]] / (2 ** (4 - scala));

    console.log(`
        INPUT: ${strin},
        OUTPUT:${output.toFixed(1)}
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








    async function getInput(rl){
     const input = await rl.question(`Please enter a note: `)
     //const inputNumber = Number.parseInt(input,10);
    //const inputNumber = input *1;


      
    if(notes[input.at(0).toUpperCase()] && (Number.parseInt(input.at(1)) >= 0 &&Number.parseInt(input.at(1)) <= 8) && input.length===2){
        return input.toUpperCase();
    }
    /*if(!Number.isNaN(inputNumber) || input.length > 1){
        console.log(`Please enter a valid character`);
        return getInput(rl);
    }*/
   return getInput(rl);
   
   
   
   
 }