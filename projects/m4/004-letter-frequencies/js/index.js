const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');



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



async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
        
        //const promises = nameFilesArr.map(nameFile=>leggiFile(`${__dirname}/../${nameFile}`))
        const path = `${__dirname}/../${nameFile}`
        const linesArr= await leggiFile(path);
       

        const getNumLetters= getLetters(linesArr);
        console.log(getNumLetters);       
        
        
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