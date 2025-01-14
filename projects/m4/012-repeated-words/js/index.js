const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');


function getLinesRepeated(lineArr){



let lastword ='';
for(let j = 0;j < lineArr.length;j++){
    const line=lineArr[j];
    const words= line.split(' ');
    let last = words.legth % 2 === 0 ? words.length - 2 : words.length - 1;
    for(let i = 0; i < words.length;i+=2){
       
        const word = (words[i] ?? ' ');
        const prev = words[i -1] ?? lastword
        const next = words[i + 1] ?? '';
        //console.log({word,prev,next});
        
        if(word === prev.toLowerCase() || word === next.toLowerCase()){
            console.log(`repeated word ${word} line:${j + 1}`)
        }
        
        if(i === last){
            lastword = words[words.length - 1];
        }

    }

}



}



async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
        const linesArr= await leggiFile(`${__dirname}/../${nameFile}`)
       const safeLine = linesArr.filter(line => line.trim().length > 0);
        getLinesRepeated(safeLine);
        //const path = `${__dirname}/../${nameFile}`
       
    
       
    }
catch(e){
  // console.log(e);
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