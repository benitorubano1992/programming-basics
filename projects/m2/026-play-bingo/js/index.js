

const bindDict={
    'B':[1,15],
    'I':[16,30],
    'N':[31,45],
    'G':[46,60],
    'O':[61,75]
}

function checkDiagonals(bingoArr){
    let sumLeft = 0,sumRight = 0;
    let indexLeft = 0;
    let indexRight = bingoArr.length - 1;

 
while((sumLeft === 0 || sumRight === 0) && (indexLeft < bingoArr.length && indexRight >=0)){
        sumLeft += bingoArr[indexLeft][indexLeft]
        sumRight += bingoArr[indexLeft][indexRight]
        indexLeft++;
        indexRight--;
       
        }      

    return sumLeft === 0 || sumRight === 0

}





function checksWin(bingoProva){
    const bingoArr=Object.entries(bingoProva).map(([key,second])=>{
        return second;
    })

    let hasWin= false;

    for(let i = 0; i < bingoArr.length && !hasWin; i++){
       const elArr= bingoArr[i];
        hasWin = bingoArr[i].every(el => el === 0) // checkRow
            if(hasWin){
                console.log(`row${i} has won`);
                continue
            }
            let sum = 0;

            for(let j = 0 ; j <elArr.length;j++){
                sum+= elArr[j]
                if(sum !== 0){
                    break;
                }
                else if(sum === 0 && j === elArr.length - 1){
                    hasWin = sum === 0
                }
            }
    
        }
   
        if(!hasWin){
            hasWin= checkDiagonals(bingoArr)
        }
        
     return hasWin

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
        let[min,max]=bindDict[key];
        min *= 1;
        max *= 1;
        const line=[];
        while(line.length < 5){
          
            let random = getRandomIntInclusive(min,max);
            if(!line.includes(random)){
                line.push(random)
            }
        }
        bingo[key] = line;
    }

    return bingo;
}
  


function getKey(num){
    let key='O'
    if(num >= 1 && num <= 15 ){
        key='B'
    }
    else if(num >= 16 && num <= 30){
        key='I'
    }
    else if(num >= 31 && num <= 45){
        key='N'
    }
    else if(num >= 46 && num <= 60){
        key='G'
    }
    return key;
}

function checksBingo(bingo,array){
    
for(let num of array){
    const key =getKey(num);    
   
    for(let i = 0 ; i < bingo[key].length;i++){
        if(bingo[key][i] === num){
            bingo[key][i] = 0
        }
    }
   }
}



async function main(){
    
    const bingoTry = getBingo();
   
    //console.log(Object.entries(bingoTry))
    for(let [key,arr] of Object.entries(bingoTry)){
        console.log(`${key} ${arr.join(' ')} \n`)
    }
    



    console.log('bingo end');
    console.log(checksWin(bingoTry));
    for(let [key,arr] of Object.entries(bingoTry)){
        console.log(`${key} ${arr.join(' ')} \n`)
    }
    rl.close();

}

main()




function createBingoCard(result=[]){

    if(result.length === 5){
        return result;
    }
    const radnomVal = getRandomIntInclusive(1,75);
    result.push(radnomVal);
    return createBingoCard(result);

}
