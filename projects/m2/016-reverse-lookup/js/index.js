const monthsDays = {
    January: 31,
    February: 28,  // Non-leap year
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};


const getKyes=(val)=>{
    const arrObj= Object.entries(monthsDays);
    const keysList=[];


    for(let value of arrObj){
        const [first,second]= value;
        if(second === val){
        keysList.push(first);
        }
    }
    return keysList
}


console.log(`the keys associated to ${31} are ${getKyes(31)}`)
console.log(`the keys associated to ${30} are ${getKyes(30)}`)
console.log(`the keys associated to ${28} are ${getKyes(28)}`)
console.log(`the keys associated to ${27} are ${getKyes(27).length || '[]'}`)