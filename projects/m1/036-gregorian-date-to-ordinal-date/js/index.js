

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const monthMap = {
  "january": 1,
  "february": 2,
  "march": 3,
  "april": 4,
  "may": 5,
  "june": 6,
  "july": 7,
  "august": 8,
  "september": 9,
  "october": 10,
  "november": 11,
  "december": 12
};



function getOrdinalDate(month,day,isLeapYear){
    let total = 0;
    for(let i = 1; i < month; i++){
    let days= 31;
    if([4,6,9,10].includes(i)){
        days = 30;
     }
     else if(i===2){
        days = isLeapYear(year) ? 29:28
     }

     total+= days;
    }

    return total + day;
    
}



async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
       const year= await getYear(rl); 
       const month = await getMonth(rl);
       const day = await getDay(rl,month,year);

       const ordinalDate = getOrdinalDate(month,day,isLeapYear);

        console.log(`the ordinal date of ${year}-${month}-${day} is ${ordinalDate}`);
        
     
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,type){
   const input = await rl.question(`Please enter the ${type}: `)
    return input
  }





async function getYear(rl) {
        try{
            const year =  await getInput(rl,'year');
            const yearNum = Number.parseInt(year,10);
            if(Number.isInteger(yearNum) && yearNum >= 0){
                return year;
            }

        console.log('Please enter a valid year')
        return getYear(rl);
        
        }
        catch(e){
            console.log(e)
        }

}  





async function getMonth(rl){
    try{

        const month = await getInput(rl,'month');
        if(monthMap[month]){
            return monthMap[month]
        }
        let result = "Please enter a valid string for the month"
        let monthNum = Number.parseInt(month);
        if(!Number.isNaN(monthNum)){
            result = "you entered a number, month as to be from january to december"
        }

        console.log(result);
        return getMonth(rl)

    }
    catch(e){
        console.log(e);
    }
}






async function getDay(rl,month,year) {
    try{
         let limit = 31;
         if([4,6,9,10].includes(month)){
            limit = 30;
         }
         else if(month===2){
            limit = isLeapYear(year) ? 29:28
         }
         


         const days= await getInput(rl,'days');
    const daysNum = Number.parseInt(days,10);
   
    
    if(Number.isInteger(daysNum) && (daysNum>= 1 && daysNum <= limit)){
        return daysNum;
    }    

    console.log('Please enter a valid number of days');
    return getDay(rl,'days');



}
catch(e){
    console.log(e);
}



}


function isLeapYear(year){
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
}

