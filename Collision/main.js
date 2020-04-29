//For Test and exibition reasons

canvas = document.getElementById('plaisio')
canvas.width=640
canvas.height=480

context = canvas.getContext('2d')

context.fillStyle='blue'
context.fillRect(0,0,canvas.width,canvas.height)


const timer = new Timer(1/30)

const mario = new Mario(0,0);

const level = new Level();
level.addEntity(mario);
level.addPlegma(plegma1_0);
console.log(level.grid.plegma)

//controllers with mario inside

timer.update = function update(deltaTime){
    context.fillStyle='blue'
    context.fillRect(0,0,canvas.width,canvas.height)
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

keyboarstate.addKeyMaping( 'Space', (keyState) => {
    if (keyState){
        mario.Jump.start()
    }
} )



timer.start()