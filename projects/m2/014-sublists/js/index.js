

function getFirstIndex(val,list){
    console.log({list,val,index:list.indexOf(val)})
    return list.indexOf(val)
}


function subList(sub,list){
    if(sub.length === 0 ){
        return true;
    }
    const firstIndex = getFirstIndex(sub[0],list);
    
    if(firstIndex === -1 || ((firstIndex + sub.length ) > list.length)){
        console.log('here');
        return false;
    }
    
    console.log({firstIndex,sub,list})
    
    for(let i = 1; i < sub.length; i++){
        let el = sub[i];
        let confr = list[firstIndex + i]
        console.log({el,confr})
        if(el !== confr){
            return false;
        }
        
    }

    return true;

}


