const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');








async function main(){
    const rl = readline.createInterface({ input, output });
    try{
        const nameFile = await getInput(rl);
        const path = `${__dirname}/../${nameFile}`
        
        const arrString = await leggiFile(path,rl);
        const fileArr = arrString.split('\n');
        const tail = fileArr.slice(fileArr.length - 10).join('\n')
        console.log(tail);
        //console.log('fine',arrString.length);


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
    
    const rr = fs.createReadStream(path,'utf-8');
    const arrResult=[]

    rr.on('data', (data) => {
    console.log({data},arrResult.length)
    arrResult.push(data)
});
rr.on('end', () => {
    console.log('end','finish rading the file');
    resolve(arrResult)
}); 
rr.on('error',(e)=>{
    reject(e)
})
    

})
}





async function getInput(rl){
   
    const input = await rl.question(`Please enter the name of file: `)
     //const inputNumber = Number.parseInt(input,10);
    const extensions =input.split('.')[1]

    if(extensions === 'txt'){
        console.log('extension ok')
        return input;
    }
 
  
     console.log("Please Enter a valid file name")
     return getInput(rl);
 
 }