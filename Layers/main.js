canvas = document.getElementById('plaisio')
canvas.width=800
canvas.height=480

context = canvas.getContext('2d')

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



const timer = new Timer(1/30)

const mario = new Mario(-8.88178,0)
const level = new Level();
level.addEntity(mario);

level.addPlegma(plegma1_0);
level.addLayer(createBackroundLayer(level.grid))
level.addLayer(createEntitiesLayer(level.entities))


//controllers with mario inside

timer.update = function update(deltaTime){
    level.update(deltaTime)
    level.draw(context)
}


keyboarstate = new KeyBoardState()
keyboarstate.listenTo(window)

keyboarstate.addKeyMaping( 'ArrowRight', (keyState) => {
    if (keyState){
        mario.vel.x+=100;
    } else {
        mario.vel.x -=100;
    }
} )

keyboarstate.addKeyMaping( 'ArrowLeft', (keyState) => {
    if (keyState){
        mario.vel.x-=100;
    } else {
        mario.vel.x +=100;
    }
} )


keyboarstate.addKeyMaping( 'Space', (keyState) => {
    if (keyState){
        mario.Jump.start()
    }
} )

canvas.addEventListener('mousedown' , (event) => {
    mario.pos.set(event.offsetX, event.offsetY)
    mario.vel.set(0,0)
})

canvas.addEventListener('mousemove' , (event) => {
    if (event.buttons === 1){
        mario.pos.set(event.offsetX, event.offsetY)
        mario.vel.set(0,0)
    }
})

keyboarstate.addKeyMaping( 'ArrowLeft', (keyState) => {
    if (keyState){
        mario.vel.x-=100;
    } else {
        mario.vel.x +=100;
    }
} )


keyboarstate.addKeyMaping( 'KeyD', (keyState) => {
    if (keyState){
        if(level.entities.size>1){
            level.entities.delete(mario)
        }
    }
} )

 


timer.start()

