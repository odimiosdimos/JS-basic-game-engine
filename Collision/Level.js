class Level {
    constructor() {
        this.entities = new Set();
        this.tiles = [];
        this.grid = new Grid();
    }

    update(deltaTime){
        this.entities.forEach( entity => {
            entity.update(deltaTime)
        })
    }

    draw(context){
        this.entities.forEach( entity => {
            entity.draw(context)
        })
    }

    addEntity(entity){
        this.entities.add(entity)
    }

    addPlegma(plegma_){
        this.grid.addPlegma(plegma_)
    }

}