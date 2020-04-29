class TileResolver {

    //it returns the tile pou antistixei at the
    //current x,y

    constructor(grid, tileSize=32){
        this.grid = grid;
        this.tileSize = tileSize
    }

    //takes a number representing a position 
    //returns in witch grid tile it is
    toIndex(pos){
        return Math.floor( pos/this.tileSize )
    }


    //returns whethet the tile of the 
    //parameter indexes is null or something elde
    getByIndex(indexX, indexY){
        const tile = this.grid.get(indexX,indexY)
        if (tile){
            return tile;
        }
    }

    //check if the tile pou antistixei sthn 8esh 
    // pou tou dinetai, einai null h something else
    matchByPosition(posX, posY){
        return this.getByIndex( this.toIndex(posX),
        this.toIndex(posY) )
    }



}