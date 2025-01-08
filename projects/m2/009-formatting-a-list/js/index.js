//*apples*
//*apples and oranges*
//*apples, oranges and bananas*
//*apples, oranges, bananas and lemons*
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

function getUpdateList(list){
    let result=[];
    for(let i = 0; i < list.length;i++){
        let resultS=""
        for(j= 0; j <= i;j++){
           const diff =  i - j
           let add =''
            if(diff > 1){
                add=", "
            }
            else if(diff === 1){
                add =" and "
            }
            resultS= resultS + list[j] + add;
          }
          result.push(resultS)
    }
    return result;
}


async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const list=await getInput(rl);
    
       const updateList = getUpdateList(list)
    console.log(updateList.join('\n')); 


     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
   main();




async function getInput(rl,element =1,result=[]){
   
   const input = await rl.question(`Please enter the element of the list N.${element} : `)
    if(input.length === 0){
        return result;
    }
    
    result.push(input)
    element+=1
   
   
   //const inputNumber = Number.parseInt(input,10);
   
    //console.log("Please Enter a valid number")
   return getInput(rl,element,result);

}