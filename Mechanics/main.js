canvas = document.getElementById('plaisio')
canvas.width=320
canvas.height=320

context = canvas.getContext('2d')
context.fillStyle = "grey"
//context.fillRect(0,0,canvas.width,canvas.height)

//camera should be checked to be inside the visible area
const camera = new Camera(0,0);

const timer = new Timer(1/30)

const mario = new Mario(16,16)
mario.dir = 0;
const level = new Level();
level.addEntity(mario);

level.addPlegma(plegma1_0);
level.addLayer(createBackroundLayer(level.grid,camera))
level.addLayer(createEntitiesLayer(level.entities))
level.addLayer(createCameraLayer(camera))



//controllers with mario inside

timer.update = function update(deltaTime){
    level.update(deltaTime)
    if (mario.pos.x > camera.size.x/2 && mario.pos.x < level.getWidth() - camera.size.y/2 ){
        console.log('follow')
        camera.setCenterX(mario.pos.x)
    }
    level.draw(context,camera)
}

controllersSetUp(mario,canvas,camera, level.getWidth());

timer.start()

