console.log('pippo');

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

function getFirstIndex(word){
    const VOWELS=['a','e','i','o','u']
    let result = 1;
    let found = false;
    while(!found && result < word.length){
      if(VOWELS.includes(word[result].toLowerCase())){
            found = true;
        }
      else{
            result+=1
        }
    }
    return result;
}




function getPigLatinWord(word){
    const VOWELS=['a','e','i','o','u']

    let startIndex = 0;
    let add = 'way';
    let result=word;
    if(!VOWELS.includes(word[0])){
        startIndex = getFirstIndex(word);
        add = 'ay'
        result= `${word.slice(startIndex)}${word.slice(0,startIndex)}`
        }

        return result+=add
}






//let prova ="Contractions include: don'''t, isn'''t, and would'''?t.";

//console.log(getPhraseList(prova));

async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const word =await getInput(rl);
      //const phraseList = getPhraseList(phraseInput);
       console.log(getPigLatinWord(word)); 


     
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
   
   const input = await rl.question(`Please enter the word: `)
    //const inputNumber = Number.parseInt(input,10);
   
    //console.log("Please Enter a valid number")
   return input;

}