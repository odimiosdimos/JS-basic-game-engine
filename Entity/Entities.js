const MARIO_W=32;
const MARIO_H=32;

class Mario extends Entity {
    constructor(x,y){
        super(MARIO_W,MARIO_H,x,y)
        this.addTrait(new Velocity());
        this.addTrait(new Gravity());
        this.addTrait(new Jump())
        //should it have acceleration instead of default speed?
        //should it have "sliperry" after stop /god i hated this as a kid
    }

    draw(context){
        context.fillStyle = "black";
        context.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
    }


}