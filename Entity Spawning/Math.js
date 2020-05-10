class Vec2 {
    constructor(x, y) {
        this.set(x, y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    static addVecs(vec1,vec2){
        return new Vec2(vec1.x+vec2.x,vec1.y+vec2.y);
    }

}

