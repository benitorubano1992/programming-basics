const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');


function analizeYear(arr){
    const result={};
	
   index = 0;
  while((!result['F'] || !result['M'])&& index < arr.length){    
    const line = arr[index];
    const [name,sex,num]=line.split(',');
   
    if(!result[sex]){
      result[sex]=name;
    }
  	index++;
  }
   return result; 
}


function getFileNames(){
    const fileNames=[];
    for(let i =1880;i <= 2021; i++){
        fileNames.push(`${__dirname}/../babynames/yob${i}.txt`)
    }
    return fileNames;
}



async function main(){
    //const rl = readline.createInterface({ input, output });
    try{
        
        const fileNames = getFileNames()
        console.log('start reading files---------------------------------');
        const promises = fileNames.map(nameFile=>leggiFile(nameFile))
        const arrYear=await Promise.all(promises);
    
        console.log('----------------------end reading files-------');
        //console.log(arrYear[0].length);
        const listObj= arrYear.map(arr=>analizeYear(arr));
  const listNmaes = listObj.reduce((acc,next)=>{
            for(key in next){
                if(!acc[key]){
                    acc[key]=[next[key]]
                }
                else if (!acc[key].includes(next[key])){
                    acc[key].push(next[key])
                }
            }
        
            return acc;
        },{})
    

        console.log(`list fem: \n${listNmaes['F'].join('\n')}`) 
        console.log(`list mas: \n${listNmaes['M'].join('\n')}`) 
        //const path = `${__dirname}/../${nameFile}`
        //const resultArr=await Promise.all(promises);
       
    }
catch(e){
   console.log(e);
    //const {path }= e;
   //console.log(`not found file ${path.split(`\\`).at(-1)} in the path : ${path.split(`\\`).slice(3,8).join('\\')}`)
}
finally{
 //   rl.close()
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
           
            resolve(data.split('\r\n'))    
        })
   
    })
}





async function getInput(rl,result=[]){
   
    if(result.length === 2){
        return result;
    }

    let numFile = result.length === 0 ?'first':'second';

    const input = await rl.question(`Please enter the name of the ${numFile} file: `)
     //const inputNumber = Number.parseInt(input,10);
    const extensions =input.split('.')[1]

    if(extensions === 'txt'){
        console.log('extension ok')
        result.push(input);
    }
    console.log("Please Enter a valid file name")
    return getInput(rl,result);
 
 }