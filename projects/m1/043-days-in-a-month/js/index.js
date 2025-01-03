//The function will take the number of units as its first parameter, and the unit of measure (cup, tablespoon or teaspoon) as its second parameter. 
//It will return a string representing the measure using the largest possible units as its only result. 
//For example, if the function is provided with parameters representing 59 teaspoons then it should return the string “1 cup, 3 tablespoons, 2 teaspoons”.

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const TBCup = 16;
const teaSpoons = 3;




const getCup = (num)=>{
    const tablespoons = num * 16;
    return `${num} cup equals to ${tablespoons} tablespoons`
}

const getTableSpoons=(num)=>{
    let numCups= 0;
    let numTableSpoons = 0;

    
    if(num >=16){
        numCups = Math.floor(num / TBCup );
        numTableSpoons = num % TBCup
    }
    else{
        numTableSpoons = num;
    }
    return `${num} of tablespoons squals to ${numCups} of cups, ${numTableSpoons * 3} teaspoons`

}

const getTeaSpoons=(num)=>{
    const numOfCup = Math.floor(num / 48);
    const restCup = num % 48;
    const numTableSpoons = Math.floor(restCup / 3);
    const numTeaSpoons = restCup % 3 ;

    return  `${num} of teaspoons squals to ${numCups} of cups, ${numTableSpoons } tablespoons, ${numTeaSpoons} of teaspoons`
}



const cup={
    0:getCup,
    1:getTableSpoons,
    2:getTeaSpoons
}


const validateUnit=(input)=>{
    const inputNumber = Number.parseInt(input,10);

    return Number.isInteger(input) && (inputNumber>= 0 && inputNumber <= 3)
}


const validateNum =(input)=>{
    const inputNumber = Number.parseInt(input,10);
    return Number.isInteger(input) && (inputNumber>= 0)
}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
        console.log(`
                rules:
                -Enter 0 for the cup
                -Enter 1 for the tablespoons
                -Enter 2 for the teaspoons”
            `)


       const unit = await getInput(rl,'unit',validateUnit);
       const num = await getInput(rl,'unit',validateNum);
        
       console.log(cup[unit](num));
       
     
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
            return inputNumber;
        }
     
        
     
         console.log(`Please enter a valid ${type}`);
          return getInput(rl,type,validate);
     
          
        
        /*if(!Number.isNaN(inputNumber) || input.length > 1){
            console.log(`Please enter a valid character`);
            return getInput(rl);
        }*/
       
       
       
       
       
     }




