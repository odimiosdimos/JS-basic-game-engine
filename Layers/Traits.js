class Trait {
    constructor(name){
        this.NAME = name

    }

    update(){
        console.warn('Unhandled update call');
    }

}

//the traits

class Velocity extends Trait{
    constructor(){
        super('Velocity')
    }

    update(entity,deltaTime){
        entity.pos.x += entity.vel.x*deltaTime;
        entity.pos.y += entity.vel.y*deltaTime;
    }

}

class Gravity extends Trait {
    constructor(){
        super('Gravity')
        this.G = 100;
    }

    update(entity,deltaTime){
        entity.vel.y+=this.G*deltaTime
    }

}

class Jump extends Trait {
    constructor(){
        super('Jump')

        //h taxithta tou phdhmatos
        this.velocity = 200;

        //h megisth diarkeia tou phdhmatos
        this.duration = 0.3;

        //o sinolikos xronos pou einai pathmeno to Jump
        this.engageTime=0;
    }

    start(){
        this.engageTime=this.duration;
        console.log('Jump')
    }

    cancel(){
        this.engageTime=0;
    }

    update(entity,deltaTime){
        if (this.engageTime > 0){
            entity.vel.y = -this.velocity;
            this.engageTime -= deltaTime
        }
    }

}