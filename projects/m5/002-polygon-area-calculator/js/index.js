class Rectangle {
    constructor(width,height ){
        this.width = width;
        this.height = height;
    }
    set_width(width){
        this.width = width;
    }
    set_height(height ){
        this.height  = height; 
    }
    get_area(){
        return this.width * this.height
    }

    get_perimeter(){
        return (this.width + this.height) * 2;
    }
    get_diagonal(){
        const sum = (this.width ** 2) + (this.height **2);
        return sum ** 0.5
    }
    get_inside(obj){
        if( !obj instanceof 'Rectangle' || !obj instanceof 'Square'){
            throw new Error('has to be an object of rectangle class')
        }

        return Math.floor(this.get_area() / obj.get_area() );

    }
    get_picture(){
        let result = '';
        for(let i = 0; i < this.height;i++){
            let string='';
            for(let j = 0; j <this.width;j++){
                string+='*'
            }
            string+='\n';
            result+=string;
        }
        return result;
    }
}


class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
    set_side(side){
        super.set_width(side);
        super.set_height (side);
    }
    set_width(side){
        this.set_side(side);
    }
    set_height(side){
        this.set_side(side);
    }
}






const rect = new Rectangle(10,5);
console.log(rect.get_area())//50
rect.set_height(3)
console.log(rect.get_perimeter())// 26
console.log(rect)
console.log(rect.get_picture())

console.log('quadrato------------------------------------------------------------');
const sq = new Square(9)
console.log(sq.get_area())
sq.set_side(4)
console.log(sq.get_diagonal())
console.log(sq)
console.log(sq.get_picture())
