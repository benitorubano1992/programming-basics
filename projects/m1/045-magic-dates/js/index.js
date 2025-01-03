const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



const DAYS=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

function validateTime(time){
    const [h,m = 0]=time.split(':');
   
    const hour = Number.parseInt(h,10);
    const minutes = Number.parseInt(m,10);
   
    let isValidHour= Number.isInteger(hour) && (hour >= 0 && hour <= 24);
   let isValidMonutes = Number.isInteger(minutes) && (minutes >= 0 && minutes < 60);
    return isValidHour && isValidMonutes;

}




function validateDays(days){

    let lowerDays = days.toLowerCase();
    if(DAYS.includes(lowerDays) || days.length === 0){
        return true;
    }

    return false;
}

function getNewDate(addDays, start){
const index = DAYS.indexOf(start.toLowerCase());

return DAYS[ index + addDays ];

}



function getAmericanDate(hour,minutes){
let unit = 'AM';
if(hour > 12){
    hour = hour - 12;
    unit = 'PM'
}

return `${hour}:${minutes > 10? minutes:`0${minutes}`} ${unit}`
}



function getNewDate(startTime,addTime,date = ''){

    const [startHour,minutesStart]=startTime.split(':');
    const [hoursAdd,minAdd]= addTime.split(':');

    const startHourN = Number.parseInt(startHour,10);
    const minutesStartN = Number.parseInt(minutesStart,10);
    const hoursAddN = Number.parseInt(hoursAdd,10);
    const minAddN = Number.parseInt(minAdd,10);


    let totHours = startHourN + hoursAddN;
    let totMinutes = minutesStartN + minAddN;
    let addDays = 0;
    
    if(totMinutes > 60 ){
        totHours += Math.floor(totMinutes / 60);
        totMinutes = totMinutes % 60;
    }
    
    if(totHours > 24){
        addDays = Math.floor(totHours / 24);
        totHours = totHours % 24;
    }


let result = getAmericanDate(totHours,totMinutes);

if(addDays > 0){
    let concate = addDays === 1 ? '(next date)':`(${addDays} days later)`

    if(date !== ''){
        result+=`, ${addDays > 0 ? getNewDate(date,addDays):date} `
    }

    result += concate;

}


    return result;

}




  async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

       const startTime = await getInput(rl,'start',validateTime);
       const numAdd = await getInput(rl,'hour e minutes',validateTime);
       const day=await getInput(rl,'hour e minutes',validateDays);
        
       console.log({
        startTime,
        numAdd,

       })
      
       //const newDate = getNewDate(startTime,numAdd,day);
       // console.log(newDate);

     
     
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
    //const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;

   if(validate(input)){
    return input;
   }

   

    console.log(`Please enter a valid ${type}`);
     return getInput(rl,type,month);

     
   
   /*if(!Number.isNaN(inputNumber) || input.length > 1){
       console.log(`Please enter a valid character`);
       return getInput(rl);
   }*/
  
  
  
  
  
}


function  getZodicalSign(inputDate){
    console.log({inputDate});

    /*if(inputDate >= '22/12' || inputDate <= '19/01'){
        return 'Sagittarius';
    }*/

    const year = new Date().getFullYear();
    let [day,month]=inputDate.split('/');
    console.log({day,month,year});

    const dateInput= new Date(year,month - 1,day);
    


    let result ='Sagittarius';
    for(let key in ZODIAC_SIGN){
        const {start,end}= ZODIAC_SIGN[key];
        
        const [dStart,mStart]= start.split('/');
       
        const[dEnd,mEnd]= end.split('/');

        const startDate = new Date(year,Number.parseInt(mStart,10) -1,dStart);
        const endDate = new Date(year,Number.parseInt(mEnd,10) -1,dEnd);
        
        
        //console.log(start,end,key);
      
    if(dateInput >= startDate && dateInput <= endDate){
            result= key;
        }
    }
    
    return result;

}



function capitalize(string){
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
}



function isValidMonth(month){
    const capitalMonth= capitalize(month);
    
    return daysInMonth[capitalMonth] !== undefined;
}

function isValidDay(input,month){
    let inputNum = input * 1;
    console.log(inputNum,Number.isNaN(inputNum));

    if(!isValidMonth(month) || Number.isNaN(inputNum)){
        return false;
    }
    else if(inputNum > 0 && inputNum <=daysInMonth[month] ){
        return true;
    }
    return false;

}