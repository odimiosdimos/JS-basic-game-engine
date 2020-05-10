class Camera {

    constructor(x,y){
        this.pos = new Vec2(x,y)
        this.size = new Vec2(320,320);
        //size shouldn't be bigger than game visible area
    }

    setCenterX( center ){
        //ckeck if <0 or bigger than oria
        this.pos.x = center - this.size.x/2 ;

    }

}