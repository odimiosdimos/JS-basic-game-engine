//prob level map
function createBackroundLayer(backgroundMap,camera){
    const buffer = document.createElement('canvas');
    buffer.width = camera.size.x + 32 ;
    buffer.height = camera.size.y + 32;
    const buffContext = buffer.getContext('2d')


    function redrawFromCamera(camera){

        let startIndex= new Vec2( 
            Math.floor(camera.pos.x/32) ,
            Math.floor(camera.pos.y / 32) ); 
        let endIndex=  new Vec2( 
           Math.ceil( (camera.pos.x+camera.size.x) / 32 ) ,
           Math.ceil( (camera.pos.y+camera.size.y) / 32 )) ; 

        //if (startIndex < 0) startIndex=0;
        //if (startIndex > backgroundMap.getWidth() )

        console.log("from : " + startIndex.x+", "+startIndex.y+" to : "+
        endIndex.x+", "+ endIndex.y)

        for (let row=startIndex.y; row < endIndex.y;row++){
            for (let col=startIndex.x; col < endIndex.x;col++){
                tile = backgroundMap.get(col,row)
                if (tile) {
                    buffContext.fillStyle='brown'
                    buffContext.fillRect((col-startIndex.x)*32,
                    (row-startIndex.y)*32,
                        32,32) //width, height
                } else {
                    buffContext.fillStyle='blue'
                    buffContext.fillRect((col-startIndex.x)*32,(row-startIndex.y)*32,//starting pos
                        32,32) //width, height
                }
            }
        }
    }

    return function drawBackgroundLayer(context,camera){
        redrawFromCamera(camera);
        context.drawImage(buffer,- (camera.pos.x%32),- (camera.pos.y%32));

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

function createCameraLayer(cameraToDraw){

    return function drawCameraRect(context, fromCamera){
        context.strokeStyle = 'grey';
        context.lineWidth = 4;
        context.beginPath();
        context.rect(
            cameraToDraw.pos.x - fromCamera.pos.x,
            cameraToDraw.pos.y - fromCamera.pos.y,
            cameraToDraw.size.x,
            cameraToDraw.size.y,
        )
        context.stroke()
    }

}
