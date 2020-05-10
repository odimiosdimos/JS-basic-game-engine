class Entity {
    constructor(w=0,h=0,posX=0,posY=0) {
        this.pos = new Vec2(posX, posY);
        this.vel = new Vec2(0, 0);
        this.size = new Vec2(w,h);
        this.dir = 0; //1 or -1

        this.traits = []
    }

    addTrait(trait){
        this.traits.push(trait)

        //creates a new variable (like in the constructor)
        this[trait.NAME] = trait;
    }


    update(deltaTime) {
        this.traits.forEach( trait =>{
            trait.update(this,deltaTime)
        } )

    }
}