const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');


function removeWord(line,word){
    const regEx = new RegExp(word,'gi');
    return line.replace(regEx,(world)=>"*".repeat(world.length))
}


async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const [nameFile,word] = await getInput(rl);
        console.log({nameFile,word})

        const linesArr= await leggiFile(`${__dirname}/../${nameFile}`)
       const safeLine = linesArr.filter(line => line.trim().length > 0);
       const newLine = safeLine.map(line=> removeWord(line,word));
       console.log('safe text')
        console.log(newLine.join('\n'));
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





async function getInput(rl,result=[]){
   
    if(result.length === 2){
        return result;
    }
    
    let type = result.length === 0 ? 'file':'word';
    const input = await rl.question(`Please enter the name of the ${type}: `)
     //const inputNumber = Number.parseInt(input,10);
    
     const extensions = result.length >0 ?input.trim():input.split('.')[1];

     console.log({
        extensions,type
     })

    if((extensions === 'txt' && type === 'file') || (type === 'word' && extensions.length > 0)){
        console.log('extension ok')
        let arrInput = type === 'file' ?input:extensions
        result.push(arrInput);
    }
    else{
        console.log("Please Enter a valid file name")
    }
    return getInput(rl,result);
 
 }