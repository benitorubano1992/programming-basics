class Category{
    constructor(category){
        this.category = category;
        this.ledgers  =[];
    }
    deposit(amount,description=''){
        this.ledgers.push({
            amount,
            description
        })
    }
    getBalance(){
           return this.ledgers.reduce((acc,next)=>{
            return acc + next.amount
           },0) 
    }

    withdraw(amount,description){
        
        const hasEnoughFunds = this.check_funds(amount);
        if(hasEnoughFunds){
            this.deposit( amount * - 1,description)
        }
        return hasEnoughFunds;
        }
    
        
    
    check_funds(amount){
        const currentAmount = this.ledgers.reduce((acc,next)=>{
            return acc + next.amount
        },0)
        return currentAmount>= amount
    }

    static getCorrectVal(num){
        if(Number.isNaN(num)){
            throw new Error('you should provide a number');
        }
        if(`${num}`.replace('.','').length > 7){
            return num.toPrecison(7)
        }
        return num;
    }


    print(){
        const numAsterix = 30 - this.category.length;
        let numAsterixL,numAsterixR = Math.floor(numAsterix / 2);
        if(numAsterix / 2 !== 0){
            numAsterixL = Math.floor(numAsterix / 2) + 1
            numAsterixR = Math.floor(numAsterix / 2)
        }
        console.log(`${'x'.repeat(numAsterixL)}${this.category}${'x'.repeat(numAsterixR)}`);
        let result='';
        for( let ledger of this.ledgers){
            const word = ledger.description.length > 0 ? ledger.description : `${ledger.amount >= 0 ? 'deposit':'widthraw'}` 
            const whiteSpaces = 23 - word.length;
            result+=`${word}${' '.repeat(whiteSpaces)}${Category.getCorrectVal(ledger.amount.toFixed(2))}`
        }   
        result+=`total: ${this.getBalance()}`
        console.log(result);

    }

}


const food = new Category('food');
food.deposit(1000,'initial deposit');
food.withdraw(10.15,'groceries');
console.log(food.getBalance())



