const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const { get } = require('http');



function getLimit(month,isLeapYear){
    if([4,6,9,10].includes(month)){
        return 30;
    }
    else if (month === 2){
        return isLeapYear ? 29:28
    }
    else{
        return 31;
    }
}



function getNext (year,month,days,limit){
    if(days === limit && month === 12){
        return {
            year:year + 1,
            month:1,
            days:1
        }
    }
    else if(days === limit){
        return {
            year,
            month:month + 1, 
            days:1
        }
    }
    else{
        return {
            year,
            month,
            days:days +1
        }
    }

}



function formate(value){
    return `${value}`.length <2 ?`0${value}`:`${value}`;
}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
        const year  = await getInput(rl,'year');
        const month= await getMonth(rl,'month');
        const isLeapYear = getLeapYear(year);
        const limit= getLimit(month,isLeapYear);
        const days = await getDay(rl,limit);
       


        const {
            year:newYear,
            month:newMonth,
            days:newDays
        }= getNext(year,month,days, limit);
        
    
        console.log('nextdate',`${newYear}-${formate(newMonth)}-${formate(newDays)}`);        



    
      

    
      
    
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
    
    
    
    
    
    
        async function getInput(rl,type){
         const input = await rl.question(`Please enter a valid ${type}: `)
         const inputNumber = Number.parseInt(input,10);
        //const inputNumber = input *1;
            if(!Number.isNaN(inputNumber) && Number.isInteger(inputNumber) && inputNumber>= 0){
              return inputNumber;
            }
    
          
        
        /*if(!Number.isNaN(inputNumber) || input.length > 1){
            console.log(`Please enter a valid character`);
            return getInput(rl);
        }*/
       return getInput(rl,type);
       
       
       
       
     }



     async function getMonth (rl){
try{
    const month = await getInput(rl,'month');
    if(month <= 12){
        return month;
    }

    return getMonth(rl)

}
catch(e){
    console.log(e)
}

}


async function getDay(rl,limit){

try{
    const days = await getInput(rl,'day');
    if(days<=limit){
        return days;
    }

    return getDay(rl,limit);

}
catch(e){
    console.log(e)
}

}