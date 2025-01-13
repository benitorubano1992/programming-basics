const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');


function getWordMost(arrLines){

const results=arrLines.reduce((acc,next)=>{
    const nextWords = next.split(' ');
    for(let word of nextWords){
        const wordNew = deleteWords(word).toLowerCase();
        if(wordNew.length > 0){
            acc[wordNew] = (acc[wordNew] ?? 0 ) + 1
        }
    }
   return acc; 

},{})

return Object.entries(results).sort((a,b) => Number(b[1],10) - Number(a[1],10)).map(el=>el[0])
}





function getLetters(lineArr){
const newReg= new RegExp('[a-z]');

return lineArr.reduce((acc,next)=>{
 
    const nextLett = next.split('');
    for(let letter of nextLett){
        let lowerCaseL = letter.toLowerCase();
        if(newReg.test(lowerCaseL)){
            acc[lowerCaseL] = (acc[lowerCaseL] ?? 0) + 1
        }
    }

    return acc;

},{})



}


function deleteWords(string){
    const punt = [".", ",", "!", "?", ":", ";", "'", "\"", "-", "_", "(", ")", "{", "}", "[", "]", "<", ">", "/", "\\", "|"];

    let newString= string.trim();
   
     if(!punt.includes(newString[0]) && !punt.includes(newString.at(-1))){
      
        return newString;
    }

    if(punt.includes(newString[0])){
        newString = newString.slice(1)
    }

    if(punt.includes(newString.at(-1))){
        newString = newString.slice(0,newString.length - 1)
    }

    return deleteWords(newString);
}








async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
        
        //const promises = nameFilesArr.map(nameFile=>leggiFile(`${__dirname}/../${nameFile}`))
        const path = `${__dirname}/../${nameFile}`
        const linesArr= await leggiFile(path);
       

       const wordMostOccur = getWordMost(linesArr)[0]; 
        console.log(`the word who ccur the most in ${nameFile} is ${wordMostOccur}`);       
        
        
        }
catch(e){
   //console.log(e)
    const {path ='' }= e;
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