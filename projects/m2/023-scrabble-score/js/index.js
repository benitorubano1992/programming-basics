const bindDict={
    'B':[1,15],
    'I':[16,30],
    'N':[31,45],
    'G':[46,60],
    'O':[61,75]
}


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }

function getBingo(){
    const bingo={};
    const keys=Object.keys(bindDict);
    for(let key of keys){
        let[min,max]=keys[key];
        min *= 1;
        max *= 1;
        const line=[];
        while(line.length === 5){
            let random = getRandomIntInclusive(min,max);
            if(line.includes(random)){
                line.push(random)
            }
        }
        bingo[key] = line;
    }


}
  


function main(){
    const bingoTry = getBingo();
    console.log(Object.values(bingoTry));

} 
main()