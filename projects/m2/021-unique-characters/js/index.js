

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


function getUniqueChar(string,cache={}){

    if(string.length === 0){
        return Object.keys(cache).length
    }

    let char = string[0];
    if(!cache[char.toLowerCase()]){
        cache[char.toLowerCase()] = 1
    }

    return getUniqueChar(string.slice(1),cache)

}



  
async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const num= await getInput(rl); 
        console.log(`the string ${num} has  ${getUniqueChar(num)} unique character`);
     
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
   
  
   const input = await rl.question(`Please enter the string: `)
   return input;
   
   

}