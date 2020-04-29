class TileCollider{
    constructor(grid){
        this.tileResolver = new TileResolver(grid)
    }

    test(entity){

        const match = this.tileResolver.matchByPosition(entity.pos.x,entity.pos.y)
        if (match){
           console.log('Matched Tile: ',match)
        }
    }


}