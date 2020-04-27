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



let timer = new Timer(1/15)

timer.update = function update(){
    context.fillStyle='blue'
    context.fillRect(0,0,canvas.width,canvas.height)

    drawMyRect()
}
keyboarstate = new KeyBoardState()
keyboarstate.listenTo(window)





timer.start()