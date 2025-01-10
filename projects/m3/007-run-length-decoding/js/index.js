function runLengthDecoding(string,current='',count = 0,result=[]){
    if(string.length === 0){
        return result;
    }
    
    
if(current.toLowerCase() !== string.at(0).toLowerCase()){
    if(current !== ''){    
    const arr=[current,count]
        result.push(...arr)
    }
        
    current =  string.at(0).toLowerCase();
    count =0;
    }
    else {
        count++;
    }  

    return runLengthDecoding(string.slice(1),current,count,result)
}
