//For Test and exibition reasons

canvas = document.getElementById('plaisio')
context = canvas.getContext('2d')

context.fillStyle='blue'
context.fillRect(0,0,canvas.width,canvas.height)


let x=0;
let y=0;
let w=50;
let h=50;

function drawMyRect(){
    context.fillStyle='black'
    context.fillRect(x,y,w,h)
}


timer = new Timer(1/30)

//give the right update method
timer.update = function update() {
    context.fillStyle='blue'
    context.fillRect(0,0,canvas.width,canvas.height)

    drawMyRect()

    x+=2
}

timer.start()

