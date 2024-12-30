const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
        const year  = await getInput(rl);
    
       const isLeapYear = getLeapYear(year);
       let result = `the year ${year} is a leap year`;
       if(!isLeapYear){
        result = `the year ${year} is not a leap year`;
       }
     console.log(result);
    
      
    
        //const result = 0;
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    
    
    main();
    
    function getLeapYear(year){
        return (year % 400 === 0 || (year % 400 !==0 && year % 4 === 0))
    }
    
    
    
    
    
    
        async function getInput(rl){
         const input = await rl.question(`Please enter a valid year: `)
         const inputNumber = Number.parseInt(input,10);
        //const inputNumber = input *1;
            if(!Number.isNaN(inputNumber) && Number.isInteger(inputNumber) && inputNumber>= 0){
                return inputNumber
            }
    
          
        
        /*if(!Number.isNaN(inputNumber) || input.length > 1){
            console.log(`Please enter a valid character`);
            return getInput(rl);
        }*/
       return getInput(rl);
       
       
       
       
     }