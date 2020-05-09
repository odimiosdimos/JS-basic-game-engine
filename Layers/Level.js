class Level {
    constructor() {
        this.entities = new Set();
        this.grid = new Grid();

        this.comp = new Compositor();

        this.tileSize = 32;

        this.entitySprites = null;

    }

    addLayer(layer){
        this.comp.addLayer(layer)
    }


    update(deltaTime){

        this.entities.forEach( entity => {
            entity.update(deltaTime)
        })


    }

    createEntitiesLayer(){
        const buffer = document.createElement('canvas');
        buffer.width=64;
        buffer.height=64;

        const buffCtx = buffer.getContext('2d');

        this.entitySprites = buffer;

    }

    

    draw(context,camera){
        //draw ground and bagkground
        this.comp.draw(context,camera)

    }
    addEntities(entities){
        entities.forEach( entity =>{
            this.entities.add(entity)
        })
    }

    addEntity(entity){
        this.entities.add(entity)
    }

    addPlegma(plegma_){
        this.grid.addPlegma(plegma_)
    }


    getEntitiesWithName(name){
        //not yet implemented
    }

    getFirstEntityWithName(name){
        this.entities.forEach( entity =>{
            if (entity.NAME = name){ //maybe we should first check if entity HAS name
                return entity;
            }
        } )

    }

}