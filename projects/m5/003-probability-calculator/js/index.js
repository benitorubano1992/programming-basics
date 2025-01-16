class Hat{
    constructor(hatObject){
        if(Object.keys.length === 0){
            throw new Error('the hat object should cotain at least a type of ball');
        }
        this.contents=[];
        for(let key in hatObject){
            let val= hatObject[key];
            let valNum = Number.parseInt(val,10);
            if(Number.isNaN(valNum) || valNum <= 0){
                valNum = 1;
            }
            for(let i=0; i < valNum;i++){
                this.contents.push(key)
            }
        }

    }
    static getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) 
      }

    draw(numBalls=0){
        let intNumBalls= Number.parseInt(numBalls,10);
        if(Number.isNaN(numBalls) || numBalls <0){
            throw new Error('plese enter a valid number of balls to draw');
        }
        if(numBalls > this.contents.length){
            return this.hats.contents;
        }

        const result=[];
        while(result.length <intNumBalls){
            let indexDraw = Hat.getRandomIntInclusive(0,this.contents.length - 1);
            let estratto= this.contents.splice(indexDraw,1);
            console.log({
                indexDraw,estratto
            })
            result.push(estratto[0])
            }
          return result;  

    }
}



function experiment(hatOBj,expectedBalls,num_balls_drawn,num_experiments){

    let numSuccess = 0;

    let index = 0;
    while(index < num_experiments){

        const newHatOBj= hatOBj.contents.reduce((acc,next)=>{
            acc[next] = (acc[next] ?? 0)+ 1;
            return acc;
        },{})

        const newHat = new Hat(newHatOBj);
        const resultDraws=newHat.draw(num_balls_drawn);

        const results=resultDraws.reduce((acc,next)=>{
            acc[next] = (acc[next] ?? 0) + 1;
        },{})

        let success= true;
        for(let key in results){
            if(results[key]!== expectedBalls[key]){
                success = false;
                break;
            }
        }
        
        if(success){
            numSuccess+=1;
            console.log('won');
        }
    
    
    }

    return numSuccess / num_experiments;



}



const hat1=new Hat({
    yellow:3,
    blue:2,
    green:6
})

console.log('first contents---------------',hat1.contents);

console.log(hat1.draw(2));
console.log('new contents--------------------',hat1.contents);