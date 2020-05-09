class Compositor {
    constructor(){
        this.layers= [];
    }

    draw(context,camera){
        this.layers.forEach( layer => {
            return layer(context,camera);
        } )
    }

    addLayer(layer){
        this.layers.push(layer)
    }

}


function createSpritesLayer(){
    const buffer = document.createElement('canvas');
    buffer.width = 64;
    buffer.height = 64;
    const bufferCtx = buffer.getContext('2d')

}