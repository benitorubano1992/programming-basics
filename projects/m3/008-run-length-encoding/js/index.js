const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs')




async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
        const path = `${__dirname}/../${nameFile}`
        
        const arrString = await leggiFile(path).split('\n');
        console.log(arrString.length);


}
catch(e){
    console.log('file non trovato')
    console.log(e)
}
finally{
    rl.close()
}
}

main();

 function leggiFile(path){

    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })

    })


} 


async function getInput(rl){
   
    const input = await rl.question(`Please enter the name of file: `)
     //const inputNumber = Number.parseInt(input,10);
    const extensions =input.split(':')[1]

    if(extensions === 'txt'){
        console.log('extension ok')
        return input;
    }
 
  
     console.log("Please Enter a valid file name")
     return getInput(rl);
 
 }