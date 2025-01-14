const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');


function analizeYear(arr){
   return arr.reduce((acc,next)=>{
    
    next.reduce((acc2,next2)=>{
    
        let [name,sex,num] = next2.split(',');
        if(!sex || !name ){
            return acc2;
        }
    
        if(!acc[sex]){
        acc[sex]={
            [name]:1
        }
    } 
    else if(!acc[sex][name]) {
       acc[sex][name]= 1;
     }   
   
    },{})
    return acc;


   },{})
}


function getFileNames(start,end){
    const fileNames=[];
    for(let i =start;i <= end; i++){
        fileNames.push(`${__dirname}/../../009-names-that-reachned-number-one/babynames/yob${i}.txt`)
    }
    return fileNames;
}



async function main(){
    
    try{
        const startYear = 1880;
        const endYear = 2021;  
      
   
        const fileNames = getFileNames(startYear,endYear);
       // console.log(fileNames);
         console.log('start reading files---------------------------------');
        const promises = fileNames.map(nameFile=>leggiFile(nameFile))
       const arrYear=await Promise.all(promises);
       console.log('----------------------end reading files-------');
       const getObjYears=analizeYear(arrYear);
       const distinctNamesM= Object.keys(getObjYears['M']).sort((a,b)=> a -b);
       const distinctNamesF= Object.keys(getObjYears['F']).sort((a,b)=>a -b);
       
      console.log(`list of names M : ${distinctNamesM.join('\n')}`);
       console.log(`list of names F : ${distinctNamesF.join('\n')}`);

   
    
  
       
     
       
    }
catch(e){
   console.log(e);
    const {path }= e;
   console.log(`not found file ${path.split(`\\`).at(-1)} in the path : ${path.split(`\\`).slice(3,8).join('\\')}`)
}
finally{
   
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

    let year = result.length === 0 ?'start':'end';
    let limitInf = year === 'start' ? 1880: result[0] + 1
    let limitSup = 2021;

  



    const input = await rl.question(`Please enter the ${year} year: `)
     //const inputNumber = Number.parseInt(input,10);
    //const extensions =input.split('.')[1]
    const extNum=Number.parseInt(input,10);
  

    if( extNum >= limitInf && extNum <= limitSup  && limitInf <= 2021 ){
        console.log('extension ok')
        result.push(extNum);
    }
    else{
        console.log( `Please enter a valid year between ${limitInf}  and ${limitSup}`);
    }

    
    
    return getInput(rl,result);
 
 }