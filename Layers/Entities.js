const MARIO_W=32;
const MARIO_H=32;

class Mario extends Entity {

    //maybe it can have anafora sto paidio gia to collision
    //h apla sto collision 8a exei argument "level" ! (opws me to context)

    constructor(x,y){
        super(MARIO_W,MARIO_H,x,y)
        this.NAME = 'Mario';
        this.addTrait(new Velocity());
        this.addTrait(new Gravity());
        this.addTrait(new Jump())
    }

    draw(context){
        context.fillStyle = "black";
        context.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
    }


}