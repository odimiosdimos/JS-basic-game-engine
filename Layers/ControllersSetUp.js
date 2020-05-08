
function controllersSetUp(mario){
        

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

}