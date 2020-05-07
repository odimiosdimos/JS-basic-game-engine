class Level {
    constructor() {
        this.entities = new Set();
        this.grid = new Grid();

        this.tileSize = 32;

        this.backGroundBuff = null;

    }

    createCollisionLayer(){
        const resolvedTiles = [];

        const getByIndexOriginal = this.tileCollider.tileResolver.getByIndex;
        
        this.tileCollider.tileResolver.getByIndex = function getByIndexFake(x,y){
            resolvedTiles.push([x,y])
            return getByIndexOriginal.call(this,x,y);
            //it seems to work but who knows why!
        }

        return function drawCollision(context){
            resolvedTiles.forEach( ([x,y]) => {

                context.beginPath();
                context.lineWidth = "2";
                context.strokeStyle = "red";
                context.rect(x*this.tileSize,y*this.tileSize,
                    this.tileSize,this.tileSize)
                context.stroke();
                resolvedTiles.length = 0;
            } )

            this.entities.forEach( entity => {
                context.beginPath();
                context.lineWidth = "2";
                context.strokeStyle = "white";
                context.rect(entity.pos.x,entity.pos.y,entity.size.x,entity.size.y)
                context.stroke();
            })
        }

    }

    update(deltaTime){
        this.entities.forEach( entity => {
            entity.update(deltaTime)
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
        //it's added when the grid is added to level

        const buffer = document.createElement('canvas')
        //there shouldnt be different defines of width 
        buffer.width=800
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