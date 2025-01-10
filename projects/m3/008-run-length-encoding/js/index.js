const fs=require('fs')

function runLengthDecoding(element,current='',count = 0,result=[]){
    if(element.length === 0){
        const arr=[current,count]
        result.push(...arr)
        return result;
    }
    
    
if(current.toLowerCase() !== element.at(0).toLowerCase()){
    if(current !== ''){    
    const arr=[current,count]
        result.push(...arr)
    }
        
    current =  element.at(0).toLowerCase();
    count =1;
    }
    else {
        count++;
    }  

    return runLengthDecoding(element.slice(1),current,count,result)
}



console.log(runLengthDecoding(['A','A','A','B','B','C','C','A','D']));

console.log(runLengthDecoding(["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]))



