class Camera {

    constructor(x,y){
        this.pos = new Vec2(x,y)
        this.size = new Vec2(360,300);
        //size shouldn't be bigger than game visible area
    }

}