class Compositor {
    constructor(){
        this.layers= [];
    }

    draw(context){
        this.layers.forEach( layer => {
            return layer(context);
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