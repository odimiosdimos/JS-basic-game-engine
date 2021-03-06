
function controllersSetUp(mario,canvas,camera,levelWidth){
        
    
    keyboarstate = new KeyBoardState()
    keyboarstate.listenTo(window)

    keyboarstate.addKeyMaping( 'ArrowRight', (keyState) => {
        if (keyState){
            mario.dir+=1;
        } else {
            mario.dir -=1;
        }
    } )

    keyboarstate.addKeyMaping( 'ArrowLeft', (keyState) => {
        if (keyState){
            mario.dir-=1;
        } else {
            mario.dir +=1;
        }
    } )

    keyboarstate.addKeyMaping( 'ArrowDown', (keyState) => {
        if (keyState){
            mario.vel.y+=100;
        } else {
            mario.vel.y -=100;
        }
    } )

    keyboarstate.addKeyMaping( 'ArrowUp', (keyState) => {
        if (keyState){
            mario.vel.y-=100;
        } else {
            mario.vel.y +=100;
        }
    } )


    keyboarstate.addKeyMaping( 'Space', (keyState) => {
        if (keyState){
            mario.Jump.start()
        }
    } );

    let lastEvent;

    //8elei erwtimatiko pisw gia na ginei auto!! poios kserei gt!
   /* ['mousedown','mousemove'].forEach(eventName => {
        canvas.addEventListener( eventName, (event) => {
            //event.preventDefault()
            if (event.buttons === 1 ){
                mario.pos.set(event.offsetX+camera.pos.x,camera.pos.y+event.offsetY);
                mario.vel.set(0,0)
            }
            else if (event.buttons === 2
                && lastEvent && lastEvent.buttons===2
                && lastEvent.type === 'mousemove'){
                camera.pos.x -= event.offsetX - lastEvent.offsetX;
                console.log(camera.pos.x)
                if (camera.pos.x < 0 ) {
                    camera.pos.x = 0;
                }
                if (camera.pos.x > levelWidth - camera.size.x) {
                    camera.pos.x = levelWidth - camera.size.x ;
                }
            }
            lastEvent = event;
        } )

    });*/

    canvas.addEventListener('contextmenu', event => {
        event.preventDefault()
    })


    keyboarstate.addKeyMaping( 'KeyD', (keyState) => {
        if (keyState){
            if(level.entities.size>1){
                level.entities.delete(mario)
            }
        }
    } )

}