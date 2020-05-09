canvas = document.getElementById('plaisio')
canvas.width=600
canvas.height=480

context = canvas.getContext('2d')

const timer = new Timer(1/30)

const mario = new Mario(-8.88178,0)
const level = new Level();
level.addEntity(mario);

level.addPlegma(plegma1_0);
level.addLayer(createBackroundLayer(level.grid))
level.addLayer(createEntitiesLayer(level.entities))

const camera = new Camera(0,0);

window.camera = camera;

//controllers with mario inside

timer.update = function update(deltaTime){
    level.update(deltaTime)
    level.draw(context,camera)
}

controllersSetUp(mario,canvas,camera);

timer.start()

