function runLengthDecoding(array=[],result=""){
    if(array.length === 0 ){
        return result.split('')
    }
    const [first,second,...rest]=array;
    result+= `${first}`.repeat(Number.parseInt(second,10));

    return runLengthDecoding(rest,result)
}


console.log(runLengthDecoding(["A",12,"B",4,"A",6,"B",1]))