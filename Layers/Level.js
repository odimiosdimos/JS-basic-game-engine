class Level {
    constructor() {
        this.entities = new Set();
        this.grid = new Grid();

        this.tileSize = 32;

        this.backGroundBuff = null;

        this.tileCollider = new TileCollider(this.grid)
    }

    update(deltaTime){
        this.entities.forEach( entity => {
            entity.update(deltaTime)

            this.tileCollider.test(entity)
        })


    }

    draw(context){
        //draw ground and bagkground


        context.drawImage(this.backGroundBuff,0,0)
        

        //draw entites
        this.entities.forEach( entity => {
            entity.draw(context)
        })
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
        this.setUpBackground()
    }

    setUpBackground(){
        const buffer = document.createElement('canvas')
        //there shouldnt be different defines of width 
        buffer.width=640
        buffer.height=480
        const buffContext = buffer.getContext('2d');
        

        this.grid.plegma.forEach( (row,rowIndex) => {
            row.forEach( (tile,colIndex) => {

                if (tile) {
                    buffContext.fillStyle='brown'
                    buffContext.fillRect(colIndex*this.tileSize,rowIndex*this.tileSize,//starting pos
                        this.tileSize,this.tileSize) //width, height
                } else {
                    buffContext.fillStyle='blue'
                    buffContext.fillRect(colIndex*this.tileSize,rowIndex*this.tileSize,//starting pos
                        this.tileSize,this.tileSize) //width, height
                }
            })
        } )

        this.backGroundBuff = buffer;
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