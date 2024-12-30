const RED =[1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34,36];


const possibilities = [];
for(let i = 0 ; i <= 36; i++){
    possibilities.push(i);
}
possibilities.push('00');


console.log(possibilities.length);


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }




const main =()=>{

    const rouletteChoice = getRandomIntInclusive(0,possibilities.length - 1);
    const choice = possibilities[rouletteChoice];
    //const choice = possibilities[possibilities.length - 1]
    let result =`The spin resulted in ${choice} ...`;
    if(![0,'00'].includes(choice)){
        let range = "1 to 18";
        if(choice> 18){
            range = "19 to 36"
        }
        
        
        result+=`
            Pay ${RED.includes(choice) ? 'red':'black'}
            Pay ${choice % 2 === 0 ? 'Even':'Odd'}
            Pay ${range}
        `
    }

  console.log(result);



    


}


main();

