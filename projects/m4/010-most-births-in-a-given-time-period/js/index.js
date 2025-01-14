const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const fs = require('node:fs');




function getNames(type,obj){
    if(!type || typeof obj !== 'object'){
        throw new Error('an error has occured');
    }

    let num = -1;
    let name = '';
    
    const typeKeyObj= obj[type];
    //console.log(typeKeyObj);

    for(let key in typeKeyObj){
        if(typeKeyObj[key] > num){
            console.log('here');
          num = typeKeyObj[key];
            name = key
        }
    }
    console.log({
        name,
        num
    })

    return {name,num}
}


function analizeYear(arr){
   return arr.reduce((acc,next)=>{
    
    next.reduce((acc2,next2)=>{
    
        let [name,sex,num] = next2.split(',');
        if(!sex || !name ){
            return acc2;
        }
    
        if(!acc[sex]){
        acc[sex]={
            [name]:Number.parseInt(num,10)
        }
    } 
    else {
        acc[sex][name] = (acc[sex][name] ?? 0) + Number.parseInt(num,10)
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
    const rl = readline.createInterface({ input, output });
    try{
        
       const [startYear,endYear] = await getInput(rl);
        //console.log({
          //  startYear,
            //endYear,
            //location:`${__dirname}`
        //})
        //let isDirExists = fs.existsSync(dirPath)

        const path = `${__dirname}/../../009-names-that-reachned-number-one/babynames/yob1880.txt`
       //const arrLines = await leggiFile(path);
      
        const fileNames = getFileNames(startYear,endYear);
        console.log(fileNames);
         console.log('start reading files---------------------------------');
        const promises = fileNames.map(nameFile=>leggiFile(nameFile))
       const arrYear=await Promise.all(promises);
       console.log('----------------------end reading files-------');
       const getObjYears=analizeYear(arrYear);
       console.log(Object.keys(getObjYears)); 
       const {name:nameM,num:numM} = getNames('M',getObjYears);
       const {name:nameF,num:numF} = getNames('F',getObjYears); 

    console.log(`the most birth between ${startYear} ${endYear}
    girls : ${nameF} num ${numF} 
        boys:${nameM} num ${numM}`)

    
        //console.log(arrYear.length);
       
     
       
    }
catch(e){
   console.log(e);
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