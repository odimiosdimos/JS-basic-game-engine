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
        return Math.floor( pos/ this.tileSize )
    }

    //returns whethet the tile of the 
    //parameter indexes is null or something elde
    getByIndex(indexX, indexY){

        const tile = this.grid.get(indexX,indexY)
        if (tile){
            const x1 = indexX * this.tileSize;
            const y1 = indexY * this.tileSize ;
            const x2 = (indexX+1) * this.tileSize;
            const y2 = (indexY+1) * this.tileSize ;
            return {
                tile,
                x1,
                y1,
                x2,
                y2,
            };
        } else return null;
    }

    //check if the tile pou antistixei sthn 8esh 
    // pou tou dinetai, einai null h something else
    matchByPosition(posX, posY){
        return this.getByIndex( this.toIndex(posX),
        this.toIndex(posY) )
    }



}