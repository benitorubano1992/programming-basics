

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');




const map_number_english={
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100": "hundred"
  }


function getEnglishNumber(num,div = 2,result =''){
    if(num === 0){
        return result
    }
    const divisor = 10 ** div

    let start = Math.floor(num / ( divisor));
    let rest = num % (divisor);
    if(div === 2){
        result+= `${map_number_english [`${start}`]} ${map_number_english['100']} `
    }
    else{
        result+= `${map_number_english[`${start *divisor }`]}${div > 0 ? ' ':''}`
    }

    return getEnglishNumber(rest,div - 1,result)

}


  async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       const num= await getInput(rl); 
        console.log(`the number: ${num} in english is ${getEnglishNumber(num,`${num}`.length - 1)}`);
     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
    main();




async function getInput(rl){
   
  
   const input = await rl.question(`Please enter a number between 1 and 999: `)
    const inputNumber = Number.parseInt(input,10);
   if(Number.isInteger(inputNumber) && (inputNumber >=1 && inputNumber <= 999)){
    return inputNumber;
   }
   
   let result = "Please enter a number less or equal than 999"
   if(Number.isNaN(inputNumber)){
    result = 'Please enter a number'
   }
   else if(inputNumber < 1){
    result = "Please enter a number from 1 and 999"
   }
    console.log(result);
     return getInput(rl);

}