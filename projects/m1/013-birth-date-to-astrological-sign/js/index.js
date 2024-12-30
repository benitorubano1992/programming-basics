


const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const daysInMonth = {
    January: 31,
    February: 28,  // 29 for leap years
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  };


  const monthNum= {
    January: '01',
    February: '02',  // 29 for leap years
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
  };
  
const ZODIAC_SIGN={
    Aquarius:{
        start:'20/01',
        end:'18/02'
    },
    Pisces:{
        start:'19/02',
        end:'20/03'
    },
    Aries:{
        start:'21/03',
        end:'19/04'  
    },
    Taurus:{
        start:'20/04',
        end:'20/05'  
    },
    Taurus:{
        start:'20/04',
        end:'20/05'  
    },
    Gemini:{
        start:'21/05',
        end:'20/06'  
    },
    Cancer:{
            start:'21/05',
            end:'20/06'  
     },
    
Cancer:{
        start:'21/06',
        end:'22/07'  
 },
Leo:{
    start:'23/07',
    end:'22/08'  
},
Virgo:{
    start:'23/08',
    end:'22/09'  
},
Libra:{
    start:'23/09',
    end:'22/10'  
},
Scorpio:{
    start:'23/10',
    end:'21/11'  
},
Sagittarius:{
    start:'23/11',
    end:'21/12'
}

}

async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

       const month = await getInput(rl,'month');
       const day = await getInput(rl,'days',month);
        
       const zodicalSign = getZodicalSign(`${`${day}`.length < 2?day:`0${day}`}/${monthNum[capitalize(month)]}`);


       console.log(`
        Month input: ${month}
        Day input: ${day}
        Zodical Sign: ${zodicalSign}
        `)
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl,type,month=""){
   
  
   const input = await rl.question(`Please enter the ${type}: `)
    //const inputNumber = Number.parseInt(input,10);
   //const inputNumber = input *1;


    let isValid = type==='month'?isValidMonth(capitalize(input)):isValidDay(input,capitalize(month));

    if(isValid){
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