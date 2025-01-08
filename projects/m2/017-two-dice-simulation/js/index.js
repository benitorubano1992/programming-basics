const MAX = 1000;


    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
      }
  


function game(result=[]){

    if(result.length === MAX){
        return result;
    }

    const first =  getRandomInt(1,6)
    const second = getRandomInt(1,6)
  

   const value = first + second
    result.push(value)

    return game(result)


}

const gameResults=game();
const gameProb= gameResults.reduce((acc,next)=>{
    acc[next] = (acc[next] ?? 0) + 1
    return acc
},{})


const getProb= (val)=>{
    let guess=0;
    for(let i = 1; i < val;i++){
        if(val - i <= 6){
            guess+=1
        }
    }
    const prob =  1 - ((guess / 36) ** 1000)
   
  

   return prob.toFixed(2)

}



for(let key in gameProb){
    console.log(`${key}     ${((gameProb[key] / gameResults.length) * 100).toFixed(2)}%    ${getProb(Number(key,10))}`)
}
