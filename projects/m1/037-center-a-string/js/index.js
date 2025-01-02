const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function validationString(string){
    return string.length > 0;
}

function validationWidth(numString){
const valNum = Number.parseInt(numString,10);

return Number.isInteger(valNum) && valNum > 0;
}



function getCenterString(string='',width=0){

if(string.length > width){
    return string;
}

const rep = ' ';

let repeatFirst , repeatLast = 0;
let numTotWhite= width - string.length;
if(numTotWhite % 2 === 0){
    repeatFirst = Math.floor((width -string.length ) / 2)
    repeatLast = Math.floor((width -string.length ) / 2);
}
else{
    repeatFirst = Math.floor((width -string.length ) / 2)
    repeatLast = Math.floor((width -string.length ) / 2) - 1;
}




return rep.repeat(repeatFirst) + string + rep.repeat(repeatLast);


}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

       const string = await getInput(rl,'inputString',validationString);
       const width = await getInput(rl,'WIDTH',validationWidth);
    const widthNum = Number.parseInt(width,10);
      
    console.log({
        input:string,
        lenIn:string.length,
        width:widthNum
    })

    const result = getCenterString(string,width);
    console.log(result);
      
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,type,validation){
   
  
   const input = await rl.question(`Please enter the ${type}: `)
    //const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;
    if(validation(input)){
        return input
    }
 console.log(`Please enter a valid ${type}`);
     return getInput(rl,type,month);

     
   
 
  
  
  
  
  
}


