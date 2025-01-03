const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



const DAYS=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

function validateStart(time){
    if(time.split(':').length === 1){
        
        return false;
    }
    
    
    const [h,m = 0]=time.split(':');
   
    const hour = Number.parseInt(h,10);
    const minutes = Number.parseInt(m,10);
   
    let isValidHour= Number.isInteger(hour) && (hour >= 0 && hour <= 24);
   let isValidMonutes = Number.isInteger(minutes) && (minutes >= 0 && minutes < 60);
    return isValidHour && isValidMonutes;

}

function validateAddTime(time){
    
    if(time.split(':').length ===1){
        return false;
    }
    const [h,m = 0]=time.split(':');
   
    const hour = Number.parseInt(h,10);
    const minutes = Number.parseInt(m,10);
   
    let isValidHour= Number.isInteger(hour) && (hour >= 0);
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

function getNextDate(start,addDays = 0){
//console.log('invoce get date',{start,addDays});
    const index = DAYS.indexOf(start.toLowerCase());
console.log({index,
    nextIndex:index + addDays
})

return DAYS[ index + addDays ];


}



function getAmericanDate(hour,minutes){
let unit = 'AM';
if(hour >= 12){
    hour = hour - 12;
    unit = 'PM'
}

return `${hour === 0  ? '12': hour}:${minutes >= 10? minutes:`0${minutes}`} ${unit}`
}



function getNewDate(startTime,addTime,date = ''){
 


    const [startHour,minutesStart = 0]=startTime.split(':');
    const [hoursAdd,minAdd = 0]= addTime.split(':');

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
console.log(result);

if(addDays > 0){
    let concate = addDays === 1 ? '(next date)':`(${addDays} days later)`

    if(date !== ''){
       
        //console.log(getNewDate(date,addDays),date)
        result+=`, ${addDays > 0 ? getNextDate(date,addDays):date} `
    }
    
    result += ` ${concate}`;
}

return result;

    }




  async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

       const startTime = await getInput(rl,'start',validateStart);
       const numAdd = await getInput(rl,'hour e minutes',validateAddTime);
       const day=await getInput(rl,'day',validateDays);
        
       console.log({
        startTime,
        numAdd,
        day

       })
      
       const newDate = getNewDate(startTime,numAdd,day.toLowerCase());
        console.log(newDate);

     
     
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
     return getInput(rl,type,validate);

     
   
   /*if(!Number.isNaN(inputNumber) || input.length > 1){
       console.log(`Please enter a valid character`);
       return getInput(rl);
   }*/
  
  
  
  
  
}


