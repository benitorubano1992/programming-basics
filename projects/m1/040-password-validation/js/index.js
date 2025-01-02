const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function isValidPassword(password){
    if(password.length < 8){
        return false;
    }

    let countA= 0;
    let countMin = 0;
    let countN = 0;

    const regezM= /[A-Z]/g;
    const regexMin = /[a-z]/g;
    const num = /[0-9]/g;

        for(let index = 0; index < password.length; index++){
            console.log('here');
            let val = password[index];
        if(regezM.test(val)){
            countA++;
        }
        else if(regexMin.test(val)){
            countMin++;
        }
        else if (num.test(val)){
            countN++;
        }
      
    }
    console.log('finish');
    return countA>=1 && countMin >=1 && countN >= 1

}




async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       
       const password = await getInput(rl,'month');
       
       const result = isValidPassword(password);
        
       console.log(`the Password ${password} ${result ? 'is Valid':'not valid'}`);


      
     
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

    return input;
  
 
}