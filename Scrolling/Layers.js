//prob level map
function createBackroundLayer(backgroundMap){
    const buffer = document.createElement('canvas');
    buffer.width = 2040;
    buffer.height = 480;
    const buffContext = buffer.getContext('2d')

    backgroundMap.plegma.forEach( (row,rowIndex) => {
        row.forEach( (tile,colIndex) => {

            if (tile) {
                buffContext.fillStyle='brown'
                buffContext.fillRect(colIndex*32,rowIndex*32,//starting pos
                    32,32) //width, height
            } else {
                buffContext.fillStyle='blue'
                buffContext.fillRect(colIndex*32,rowIndex*32,//starting pos
                    32,32) //width, height
            }
        })
    } )

    return function drawBackgroundLayer(context,camera){
        context.drawImage(buffer,-camera.pos.x,-camera.pos.y)
    }

}

function createEntitiesLayer(entities){
    const Entitiesbuffer = document.createElement('canvas');
    Entitiesbuffer.width = 2040;
    Entitiesbuffer.height = 480;
    const EntitiesbuffContext = Entitiesbuffer.getContext('2d')

    return function drawEntitiesLayer(context,camera){
        EntitiesbuffContext.clearRect(0,0,Entitiesbuffer.width, Entitiesbuffer.height);

            entities.forEach( entity => {
                entity.draw(EntitiesbuffContext)
            })

            context.drawImage(Entitiesbuffer,-camera.pos.x, -camera.pos.y)

        }


}
