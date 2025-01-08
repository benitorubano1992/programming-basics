const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const getPhraseList=(stringInput)=>{
    return stringInput.split(' ').map(word=> transformeWorde(word))
}

function transformeWorde(word){

    const REMOVED=[",",'.',"'",'?','-','!',':',' ;']

    let newWord ='';
    for(let i = word.length - 1; i >= 0; i--){
        const actualChar =word[i];
        if( (i === word.length - 1 && REMOVED.includes(actualChar)) || (REMOVED.includes(actualChar) && REMOVED.includes(word[i - 1]))){
            continue;
        }
        else{
            newWord= `${actualChar}${newWord}`
        }
    }

    return newWord

}




//let prova ="Contractions include: don'''t, isn'''t, and would'''?t.";

//console.log(getPhraseList(prova));

async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const phraseInput=await getInput(rl);
      const phraseList = getPhraseList(phraseInput);
       console.log(phraseList); 


     
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
   
   const input = await rl.question(`Please enter the phrase: `)
    //const inputNumber = Number.parseInt(input,10);
   
    //console.log("Please Enter a valid number")
   return input;

}