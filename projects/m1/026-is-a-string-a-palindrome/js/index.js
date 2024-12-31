const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function getPalindrome(word){
    if(word.length % 2 !== 0){
        return 'non è palindroma'
    }

    const middle = word.length / 2;
    for(let i = 0; i< middle; i++){
        const first= word[i];
        const last = word[word.length - i];
        if(first !== last){
            return 'non è palindroma'
        }
    } 
    return 'è palindroma';

}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const word = await getInput(rl,'month');
      console.log(`la stringa ${word} ${getPalindrome(word)}`)
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,type,month=""){
   const input = await rl.question(`Please enter the palindrome word: `)
   return input; 
  }


