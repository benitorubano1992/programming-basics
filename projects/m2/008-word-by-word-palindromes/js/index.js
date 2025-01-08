const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');


function getCleanString(input){
   
    const REMOVED=[",",'.',"'",'?','-','!',':',' ;',' '];
    return input.split('').filter(char=>!REMOVED.includes(char)).join('');
    //return input
}


function getPalindromePhrase(phrase){
    const phraseList = phrase.split(' ');
   
    if(phraseList.length === 1){
        return false;
    }

    const halfString= Math.floor(phraseList.length / 2 );
    for(let i = 0; i < halfString; i++){
        let first = getCleanString(phraseList[i])
        let last = getCleanString(phraseList[phraseList.length  - 1 - i])
        if(first.toLowerCase() !== last.toLowerCase()){
            return false
        }
    }
    
    return true;

}





async function main() {
    console.log(`rukles:
        enter a string value, enter a blank if you want to quit the game`)
    
    const rl = readline.createInterface({ input, output });
     try{
       const phrase=await getInput(rl);
        const isPalindromePhrase = getPalindromePhrase(phrase);

        console.log(`the string ${phrase} ${isPalindromePhrase ? 'è':'non è'} palindroma`);

     
        
      
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,result=[]){
   
   const input = await rl.question(`Please enter the palindrome string: `)
    //const inputNumber = Number.parseInt(input,10);
  // const inputNumber = Number(input,10);

   return input;
    
   
   // return getInput(rl,result);

}