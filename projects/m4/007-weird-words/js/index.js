const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');

function getCorrectWord(word){
    console.log({word});
    let result = true;
    for(let i = 0; i < word.length; i++){
            const char = word[i];
            const prev = word[ i -1] ?? "";
            const padre = word[ i -2] ?? "";
            const next= word[i +1] ?? "";
          if((char.toLowerCase() === 'i' && prev === 'e' && padre !== 'c' ) || (char === 'i' && next === 'e' && prev === 'c' )){
            console.log(`${word} sbagliata`)
            return false;
          }
        }

        return result;

}



function getStrangeWords(wordsArr,correct=[],falseArr=[]){

    if(wordsArr.length === 0){
        return {
            correct,
            falseArr
        }
    }
    const [first,...rest]= wordsArr;
    let lowerFirst = first.toLowerCase();
    if(lowerFirst.includes('ei') || lowerFirst.includes('ie')){
        if(getCorrectWord(lowerFirst)){
            correct.push(lowerFirst)
        }
        else{
            falseArr.push(lowerFirst)
        }        
    }

    return getStrangeWords(rest,correct,falseArr)

}



async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
        const path = `${__dirname}/../${nameFile}`
        const wordsArr= await leggiFile(path)
        const {correct,falseArr}= getStrangeWords(wordsArr);
        console.log({correct,falseArr})
        console.log(`correct word: ${correct.length}, sbagliato:${falseArr.length}`)
    
    
        //console.log(comcateFIles.join('\n'));
    }
catch(e){
   
    const {path }= e;
   console.log(`not found file ${path.split(`\\`).at(-1)} in the path : ${path.split(`\\`).slice(3,8).join('\\')}`)
}
finally{
    rl.close()
}
}

main();

 function leggiFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            console.log(typeof data);
            resolve(data.split('\r\n'))    
        })
   
    })
}





async function getInput(rl,result=[]){
   

    const input = await rl.question(`Please enter the name of the  file: `)
     //const inputNumber = Number.parseInt(input,10);
    const extensions =input.split('.')[1]

    if(extensions === 'txt'){
        console.log('extension ok')
        return input;
    }
    console.log("Please Enter a valid file name")
    return getInput(rl);
 
 }