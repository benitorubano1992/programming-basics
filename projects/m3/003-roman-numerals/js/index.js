const romanNumber = {
    "M": 1000,
    "C": 100,
    "L": 50,
    "D": 500,
    "X": 10,
    "V": 5,
    'I':1
}

function transformRomanNumber(string,total = 0){
   
    if(string.length === 0){
        return total;
    }

    const first = string[0];
    const second = string[1];
    let newStr=''
    
    if(!romanNumber[second] || (romanNumber[first] >= romanNumber[second])){
        
        total+=romanNumber[first]
        newStr = string.slice(1)
    }
    else{
        let newSum = romanNumber[second] - romanNumber[first];
        total+=newSum
        newStr = string.slice(2)
    }

    return transformRomanNumber(newStr,total)
}


console.log(transformRomanNumber(`XCV`));//95
console.log(transformRomanNumber(`MCDXVI`)) // 1416;
console.log(transformRomanNumber(`CCCXCIX`)) //399 ;


