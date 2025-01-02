
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function getNextAfter(index,string){
    
    for(let i = index;i<string.length;i++){
        if(string[i]!== ' '){
            return i;
        }

    }
    return;
}
function capitalizeIt(stringInput){

    let newString = "";
    let hasCapFirstNonSpace=false;
    let nextUpperCaseIndex=undefined;

    const checkFist = [".","!","?"];
    const checkI = [".","!","?"," ","'"];

for(let i = 0; i < stringInput.length; i++){
        const actual=stringInput[i];
        const next=stringInput[i+1];
        const previous= stringInput[i - 1];
       

        let result = actual;
        
        if(actual !==" " && !hasCapFirstNonSpace){
            result=actual.toUpperCase();
            hasCapFirstNonSpace = true;
        }
        else if(actual === 'i' && previous === ' ' && checkI.includes(next)){
           result= actual.toUpperCase();
        }
        else if(checkFist.includes(actual)){
            nextUpperCaseIndex = getNextAfter( i +1,stringInput); 
           }
        else if(i === nextUpperCaseIndex){
            result = actual.toUpperCase();
            nextUpperCaseIndex = undefined;
        }

        newString+=result

    }
    return newString;

}



async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
        const inputStr= await getInput(rl);

        console.log(inputStr);
        console.log(capitalizeIt(inputStr));
      
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }



async function getInput(rl){
   
  
    const input = await rl.question(`Please enter the string: `)
    if(input.length > 0){
        return input;
    }

console.log(`Please enter at least one character`);
      return getInput(rl);
 
    }