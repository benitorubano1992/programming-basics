const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

function validationMonth(monthVal){
    let result = "Please enter a number between 1 and 12";
    const monthNum = Number.parseInt(monthVal);
    if(Number.isInteger(monthNum) && (monthNum >=1 && monthNum <= 12)){
        return true;
    }

    if(Number.isNaN(monthNum)){
        result='Please enter a number , not a string';
    }
    console.log(result);
    return false;
}


function validationYear(yearVal){
    let result = "Please enter a year with 4 digts";
    const yearNum = Number.parseInt(yearVal);
    if(Number.isInteger(yearNum) && yearVal.length === 4){
        return true;
    }
    if(Number.isNaN(yearNum)|| !Number.isInteger(yearNum)){
       result='Please enter a valid number';
    }
    console.log(result);
}

function isLeapYear(year){
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0 ))
}


function getNumDays(month,year){

let result = 31;
if([4,6,9,10].includes(month)){
    result = 30;
}
else if(month === 2){
    result = isLeapYear(year) ? 29:28;
}
return result;

}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

       const month = await getInput(rl,'month',validationMonth);
       const year = await getInput(rl,'year',validationYear);
        
      const numOfDays=getNumDays(month,year);

        console.log(`The num of Days of the month ${month} ,year ${year} is ${numOfDays}`)

     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,type,validate){
   
  
   const input = await rl.question(`Please enter the ${type}: `)
    const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;
    if(validate(input)){
        return inputNumber;
    }

    console.log(`Please enter a valid ${type}`);
     return getInput(rl,type,validate);

     
   
   /*if(!Number.isNaN(inputNumber) || input.length > 1){
       console.log(`Please enter a valid character`);
       return getInput(rl);
   }*/
  
  
  
  
  
}
