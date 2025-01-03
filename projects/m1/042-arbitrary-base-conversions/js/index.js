//Write a program that allows the user to convert a number from one base to another. Your program should support bases between 2 and 16 for both the input number and the result number. If the user chooses a base outside of this range then an appropriate error message should be displayed and the program should exit. Divide your program into several functions, including a function that converts from an arbitrary base to base 10, a function that converts from base 10 to an arbitrary base, and a main program that reads the bases and input number from the user.

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');





const BASEVAL={
    11:['A'],
    12:['A','B'],
    13:['A','B','C'],
    14:['A','B','C','D'],
    15:['A','B','C','D','E'],
    16:['A','B','C','D','E','F']
}


function valideBase(base){
    const baseNum = Number.parseInt(base,10);
  /*  if(Number.isNaN(base) || (base < 2 || base >16)){
        return false;
    }
    */
    return (!Number.isNaN(base) && (base >= 2 && base <=16))

}


function validateNum(base){
    return function(num){
        console.log(`validation ${num} base ${base}`);
        return transfromBasetoDecimal(num,base)
    }
}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

       const baseStart = await getInput(rl,'baseStart',valideBase);
       
       const valideFun=validateNum(Number.parseInt(baseStart),10);
       const value=await getInput(rl,'value',valideFun);
       const baseEnd = await getInput(rl,'baseStart',valideBase);

       console.log(`value:${value} base ${baseStart} equals to ${fromBaseDecimalToBase(transfromBasetoDecimal(value,baseStart),Number.parseInt(baseEnd,10))} in ${baseEnd}`)
     


    
     
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
        
        if(validation(input)){
            return input;
        }
       
     
         console.log(`Please enter a valid ${type}`);
          return getInput(rl,type,validation);
     
          
        
       
       
       
       
       
       
     }














function getVal(value,base){
    let num = Number.parseInt(value,10);
    if((Number.isNaN(num) &&!BASEVAL[base].includes(value.toUpperCase()))){
        return false;
    }
    return !Number.isNaN(num) ? num : 10 + BASEVAL[base].indexOf(value.toUpperCase());

}



function transfromBasetoDecimal(number,base){
let result = 0;
const numString=`${number}`;
for(let i = numString.length - 1; i >=0; i-- ){
    let val= getVal(numString[i],base);
    if(!val){
        console.log('not valid number,Please enter a valid number');
        return;
    }
    let pow = (numString.length -1) - i; 
    result += val  * (base ** pow)

}

return result;

}


function getNewRest(rest,base){
    return rest < 10 ? rest : BASEVAL[base][ rest - 10]
}




function fromBaseDecimalToBase(number,base,stringNum = '',index = 0){
if(number === 0){
    return stringNum;
}

const rest = getNewRest(number % base,base);
let newString=`${rest}${stringNum}`

index++;


const newNumber = Math.floor(number / base);

return fromBaseDecimalToBase(newNumber,base,newString)

}



