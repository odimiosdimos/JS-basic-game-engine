//For Test and exibition reasons

canvas = document.getElementById('plaisio')
context = canvas.getContext('2d')

context.fillStyle='blue'
context.fillRect(0,0,canvas.width,canvas.height)


let timer = new Timer(1/30)

const mario = new Mario(0,0);

//controllers with mario inside

timer.update = function update(deltaTime){
    context.fillStyle='blue'
    context.fillRect(0,0,canvas.width,canvas.height)

    mario.update(deltaTime)
    mario.draw(context)
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