

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


function getUniqueChar(string,cache={}){

    if(string.length === 0){
        return cache
    }

    let char = string[0];
    if(!cache[char.toLowerCase()]){
        cache[char.toLowerCase()] = 1
    }else{
        cache[char.toLowerCase()]+=1;
    }

    return getUniqueChar(string.slice(1),cache)

}

function getAnagrams(firstInput,secondInput){
    const firstCache=getUniqueChar(firstInput);
    const secondCache=getUniqueChar(secondInput);
    console.log(Object.keys(firstCache),Object.keys(secondCache));
    
    if(Object.keys(firstCache).length !== Object.keys(secondCache).length){
       console.log('diverse lunghezze')
        return false;
    }

    for(key in firstCache){
        if(firstCache[key] !== secondCache[key]){
            console.log('char diversi')
            return false
        }
    }
    return true;

}

  
async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const firstInput= await getInput(rl); 
       const secondInput= await getInput(rl);
       
       const areAnagrams= getAnagrams(firstInput.trim(),secondInput.trim());
       
       
    console.log(`the string ${firstInput},${secondInput}  ${areAnagrams ? 'are':'aren\'t'} anagrams`);
     
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