

const ordinalNumbers = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    7: "seventh",
    8: "eighth",
    9: "ninth",
    10: "tenth",
    11: "eleventh",
    12: "twelfth"
  };


  const numberWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve"
  };
  


    const christmasGifts = {
        1: "A Partridge in a Pear Tree",
        2: "Two Turtle Doves",
        3: "Three French Hens",
        4: "Four Calling Birds",
        5: "Five Gold Rings",
        6: "Six Geese a Laying",
        7: "Seven Swans a Swimming",
        8: "Eight Maids a Milking",
        9: "Nine Ladies Dancing",
        10: "Ten Lords a Leaping",
        11: "Eleven Pipers Piping",
        12: "Twelve Drummers Drumming"
      };


const START = 1;
const END = 12;



function getGifts(num){
let result =`On the ${ordinalNumbers[num]} day of Christmas my true love sent to me\n`;
    
for(let i = num; i>=1; i--){
      
        let append = '';
        if(i == 1 && num > 1){
            append='And ';
        }
        result+=`${append}${christmasGifts[i]}${i > 1 ? ',':''}\n`
        
      
    }
    return result;
}



 function main() {
    try{
     for(let index = START; index <= 12;index++){
        
        const result=getGifts(index);
        //console.log({index,result});
        console.log(result);
    }  
     
     }
     catch(e){
        console.log(e)
     }
    
    
    }
    main();




