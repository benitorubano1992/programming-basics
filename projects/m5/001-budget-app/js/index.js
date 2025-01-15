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


    transfer(amount,categoryDestination){
        if(!categoryDestination instanceof Category){
            throw new Error('has to be a Category Object');
        }


        const hasEnoughFunds = this.check_funds(amount);
        if(hasEnoughFunds){
            categoryDestination.deposit(amount,`Transfer from ${this.category}`);
            this.withdraw(amount,`Transfer to ${categoryDestination.category}`);
        }
        return hasEnoughFunds;
    }


    print(){
        const numAsterix = 30 - this.category.length;
        let numAsterixL,numAsterixR = Math.floor(numAsterix / 2);
        if(numAsterix / 2 !== 0){
            numAsterixL = Math.floor(numAsterix / 2) + 1
            numAsterixR = Math.floor(numAsterix / 2)
        }
        console.log(`${'*'.repeat(numAsterixL)}${this.category}${'*'.repeat(numAsterixR)}`);
        let result='';
        for( let ledger of this.ledgers){
            const word = ledger.description.length > 0 ? ledger.description : `${ledger.amount >= 0 ? 'deposit':'widthraw'}` 
            const upateAmount = Category.getCorrectVal(ledger.amount.toFixed(2));
            const whiteSpaces = 23 - word.length + 7 -`${upateAmount}`.length;
            
            result+=`${word}${' '.repeat(whiteSpaces)}${upateAmount}\n`
        }   
        result+=`total: ${this.getBalance()}`
        console.log(result);

    }

}

function create_spend_chart(arrayCategory){
    if(arrayCategory.some(el=>!el instanceof Category)){
        throw new Error('all the lements of the array must belongs to category');
    }
    const actualSum={}

    const totalSpend = arrayCategory.reduce((acc,next)=>{

        acc += next.ledgers.reduce((acc2,next2)=>{
            if(next2.amount < 0){
                
                actualSum[next.category]= (actualSum[next.category] ?? 0) + (next2.amount * (- 1))
                acc2+=(next2.amount * (-1))
                }
                return acc2;
        },0)
        return acc;
    },0)

    let result='Percentage spent by category \n';
    for(let i = 100; i >=0; i-=10){
        
        let string = `${' '.repeat(3 -`${i}`.length)}${i}|`;
        for(let key in actualSum){
            const percentage = Math.floor((actualSum[key] / totalSpend) * 100);
            if(percentage >= i){
                string+= ' o '
            }
        }
        string+='\n'
        result+=string;
    }


    const colums=Object.keys(actualSum);
    result+= `${' '.repeat(3)}${'_ '.repeat(colums.length * 2)} \n`;

    const maxCol = [...colums].sort((a,b)=>b.length - a.length)[0];
    for(let i = 0; i < maxCol.length; i++){
        let newString=`${' '.repeat(4)}`;
        for(let col of colums){
            newString+=` ${col[i] ?? ' '} `
        }
        result+=`${newString}\n`
    }


    console.log({totalSpend,actualSum});
    console.log(result);    
    
    
    

}





const food = new Category('food');
food.deposit(1000,'initial deposit');
food.withdraw(10.15,'groceries');
food.withdraw(15.89,'restaurant and more foo');
food.withdraw(50,'Transfer to Clothing');
console.log(` food balance is ${food.getBalance()}`)
const auto = new Category('auto');
auto.deposit(1500);
auto.withdraw(30,'groceries');
console.log(`auto balance before transfer ${auto.getBalance()}`)

const pipo= new Category('pipppa');
pipo.deposit(150);
pipo.transfer(20,auto);
pipo.withdraw(25,'prelievo banca');

console.log('pipo',pipo.ledgers);
console.log('auto ledgers',auto.ledgers);

console.log(`pip balance ${pipo.getBalance()}`);
console.log(`auto balance after transfer ${auto.getBalance()}`)



food.print();

create_spend_chart([auto,pipo,food]);






