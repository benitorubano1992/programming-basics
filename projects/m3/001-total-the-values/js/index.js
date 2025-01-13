const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');



async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFilesArr = await getInput(rl);
        
        const promises = nameFilesArr.map(nameFile=>leggiFile(`${__dirname}/../${nameFile}`))
        //const path = `${__dirname}/../${nameFile}`
        const resultArr=await Promise.all(promises);
        const comcateFIles= resultArr.reduce((acc,next)=>{
            return [...acc,...next.split('\n')]
        },[])
    
        console.log(comcateFIles.join('\n'));
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