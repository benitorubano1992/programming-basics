const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function getPrice(age){
    let price = 23;
    if(age <=2){
        price = 0;
    }
    else if(age <= 12){
        price = 14;
    }
    else if(age >=65){
        price = 18;
    }
    return price;
}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{
       

       const ageList= await getInput(rl);

       const priceList = ageList.reduce((acc,next)=>{
        return acc + getPrice(next)
       },0)

       console.log(`
      the price for the group is ${priceList.toFixed(2)}
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





async function getInput(rl,array=[]){
   
  
    const input = await rl.question(`Please enter the age: `)
     const inputNumber = Number.parseInt(input,10);
    
    
     if(input.trim().length === 0 && array.length >=0){
        return array;
     }
    
    

     if(Number.isNaN(inputNumber) || inputNumber <0 || !Number.isInteger(inputNumber)){
        console.log(`Please enter a valid integer for the age`);
     }
     else{
        array.push(inputNumber)
     }


    return getInput(rl,array);
   
}
 