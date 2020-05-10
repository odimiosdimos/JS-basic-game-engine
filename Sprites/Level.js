class Level {
    constructor() {
        this.entities = new Set();
        this.grid = new Grid();

        this.comp = new Compositor();

        this.tileSize = 32;

        this.entitySprites = null;

    }

    getWidth(){
        return this.grid.getWidth()*this.tileSize;
    }

    getHeight(){
    return this.grid.getHeight()*this.tileSize;
    }


    addLayer(layer){
        this.comp.addLayer(layer)
    }


    update(deltaTime){

        this.entities.forEach( entity => {
            entity.update(deltaTime)
        })


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