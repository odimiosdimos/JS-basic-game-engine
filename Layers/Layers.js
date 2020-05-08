//prob level map
function createBackroundLayer(backgroundMap){
    console.log(backgroundMap)
    const buffer = document.createElement('canvas');
    buffer.width = 800;
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

    return function drawBackgroundLayer(context){
        context.drawImage(buffer,0,0)
    }

}

function createEntitiesLayer(entities){
    return function drawEntitiesLayer(){

            entities.forEach( entity => {
            entity.draw(context)
            })
        }
}
