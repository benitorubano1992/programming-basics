
//A magic date is a date where the day multiplied by the month is equal to the two digit year. 
//For example, June 10, 1960 is a magic date because June is the sixth month, and 6 times 10 is 60, which is equal to the two digit year. 
//Write a function that determines whether or not a date is a magic date. 
//Use your function to create a main program that finds and displays all of the magic dates in the 20th century.

const start = 1901;
const END = 2000;
const MONTHEND = 12;



function isLeapYear(year){
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
}



function formateDates(num){
    if(num >= 10){
        return num;
    }
    return `0${num}`;
}

function validDays(month,day,year){
    if(day > 31 || day <= 0){
    return false;
}

if([4,6,9,10].includes(month) && day > 30){
    return false;
}

let leapYear = isLeapYear(year);
let limit = leapYear ? 29 : 28;

if(month === 2 && day > limit){
    return false;
}

return true;


}











async function main() {
   
    

     try{
            console.log('start');
        for(let i = start; i<= END;i++){
                const year = i;
               
                let lastDigit =Number.parseInt(`${year}`.substring(2),10);
               
               for(let j = 1; j <= MONTHEND; j++){
                    
                if(lastDigit % j === 0){
                        const days = lastDigit / j;
                        if(validDays(j,days,year)){
                            console.log(`Magical date ${year} ${year}/${formateDates(j)}/${formateDates(days)}`)
                        
                        }
                }
                    
         }



        }





      
       
     
     }
     catch(e){
        console.log(e)
     }
    
    
    }
    main();

   