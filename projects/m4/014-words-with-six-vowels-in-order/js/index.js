const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');


function getLineMatching(line){
    const vowels="aeiouy";
    const lowerLine = line.toLowerCase();
    return lowerLine.split('').filter(el => vowels.includes(el)).join('') === vowels
}


async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
      
       const linesArr= await leggiFile(`${__dirname}/../${nameFile}`)
       const safeLine = linesArr.filter(line => line.trim().length > 0);
       
       const newLine = safeLine.filter(line=> getLineMatching(line));
       console.log('matching word --------------------------------')
        console.log(newLine.join('\n'));
        //const path = `${__dirname}/../${nameFile}`
    }
catch(e){
   console.log(e);
  //  const {path }= e;
   //console.log(`not found file ${path.split(`\\`).at(-1)} in the path : ${path.split(`\\`).slice(3,8).join('\\')}`)
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





async function getInput(rl){
   
const input = await rl.question(`Please enter the name of the file: `)
     //const inputNumber = Number.parseInt(input,10);
    
     const extensions =input.split('.')[1];
if((extensions === 'txt')){
        console.log('extension ok')
        return input.trim()
    }
    else{
        console.log("Please Enter a valid file name")
    }
    return getInput(rl);
}
