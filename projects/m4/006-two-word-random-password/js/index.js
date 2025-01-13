const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');
const { getRandomValues } = require('node:crypto');

function capitalize(string){
    return `${string.at(0).toUpperCase()}${string.slice(1).toLowerCase()}`
}



function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }



function getRandomPassword(linesArr){

const first = getRandomIntInclusive(0,linesArr.length - 1);
const sec = getRandomIntInclusive(0,linesArr.length - 1);
    const word1 = linesArr.at(first);
const word2 = linesArr.at(sec)

//console.log({first,sec,word1,word2,len1:word1.length,len2:word2.length});

let newString= `${capitalize(word1)}${capitalize(word2)}`;

if((newString.length >= 8 && newString.length <= 10) && (word1.length>= 3 && word2.length >= 3)){
    //console.log('result');
    return newString
}
//console.log('recursvie');

    return getRandomPassword(linesArr)

}









async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
        
        //const promises = nameFilesArr.map(nameFile=>leggiFile(`${__dirname}/../${nameFile}`))
        const path = `${__dirname}/../${nameFile}`
        const linesArr= await leggiFile(path);
       
        const updateLines = linesArr.map(line=>line.split('\r')[0]);

       const rndPassword = getRandomPassword(updateLines); 
        console.log(`the random password is ${rndPassword}`);       
        
        
        }
catch(e){
   //console.log(e)
   const {path}=e; 
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
            resolve(data.split('\n'))    
        })
   
    })
}





async function getInput(rl){
   
const input = await rl.question(`Please enter the name of the file: `)
     //const inputNumber = Number.parseInt(input,10);
    const extensions =input.split('.')[1]

    if(extensions === 'txt'){
        console.log('extension ok')
        return input;
    }
    console.log("Please Enter a valid file name")
    return getInput(rl);
 
 }


 