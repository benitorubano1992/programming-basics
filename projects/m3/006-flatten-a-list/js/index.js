

function flattenList(list,index = 0){
   
    if(list.length === 0){
        return [];
    }

    let  [first,...rest]=list;

    console.log({first,index});

    if(Array.isArray(first)){
       first = flattenList(first)
        return [...first,...flattenList(rest,index + 1)]
    }
    

return [first,...flattenList(rest)]
}



