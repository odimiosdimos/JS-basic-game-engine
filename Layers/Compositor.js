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
