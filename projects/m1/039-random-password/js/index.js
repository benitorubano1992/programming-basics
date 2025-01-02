function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }

const MIN = 32;
const MAX = 126;

function getRandomPassword(length,result=""){

    if(result.length === length){
        return result;
    }

    const nextChar = String.fromCharCode(getRandomIntInclusive(MIN,MAX));
    result+=nextChar;

    return getRandomPassword(length,result)
}




function main(){
    const randomLength = getRandomIntInclusive(7,10);

    const randomPassword= getRandomPassword(randomLength)

    console.log(randomPassword,randomPassword.length);
}
  main();