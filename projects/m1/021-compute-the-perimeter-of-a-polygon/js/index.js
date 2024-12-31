const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');



function getPerimeter(array=[]){
    return array.reduce((acc,currPoint,index,arr)=>{
        const nextCord = (index + 1) % arr.length;
        const {x:xa=0,y:ya=0} =currPoint;
        const {x:xb=0,y:yb=0}=arr[nextCord];
        const distance = (xa -xb)**2 + (ya-yb)**2;
        acc+= Math.sqrt(distance)
        return acc;},0)

}


async function main() {
    const rl = readline.createInterface({ input, output });
     try{

       const PointList = await getInput(rl);
        console.log(PointList);
        const perimeter = getPerimeter(PointList);
        console.log(`The perimeter of that polygon is ${perimeter}`);
    }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }


main();


    async function getInput(rl,obj={},array=[]){
    
        let type = obj.x === undefined ? 'x': 'y' 
        let numCord = array.length === 0 ? 'first':'next';
        let altText = numCord === 'next'? '(blank to quit)':'';


        const input = await rl.question(`Enter the ${numCord} ${type}-coordinate${altText}: `);
        const inputNumber = Number.parseInt(input,10);


        if(array.length >= 0 && input.trim().length === 0){
            return array;
        }
        
    

        if(!Number.isNaN(inputNumber) && Number.isInteger(inputNumber)){
            obj[type]= inputNumber;
            if(type === 'y'){
             array.push(obj)
                obj={};
            }
          
        }else 
        {
           console.log(`Please enter a valid ${type} coordinate`); 
        }
        
        return getInput(rl,obj,array);    

    }




