class Grid {
    constructor(plegma_=[[]]){

        this.plegma=plegma_;

    }

    addPlegma(plegma_){
        this.plegma = plegma_
    }

    get(x, y){
        if (y>=this.plegma.length || x>=this.plegma[0].length || y<0 || x<0 ){
            //console.log('out of ondex')
            return 0;
        }
        return this.plegma[y][x]
        
    }

    set(x, y, value){
       return this.plegma[y][x] = value;
    }


}