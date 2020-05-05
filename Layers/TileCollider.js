class TileCollider{
    constructor(grid){
        this.tileResolver = new TileResolver(grid)
    }

    checkY(entity){
        const match = this.tileResolver.matchByPosition(entity.pos.x,entity.pos.y)
        
        //u could use a set (like in the spriteshet), i think it is
        //at the previues attempt

        //also this could return to the entity, maybe as trait (collide trait, or maze trait ..)

        if ( match && match.tile === 1){
            if (entity.vel.y > 0){
                if (entity.pos.y > match.y1){
                    entity.pos.y = match.y1;
                    entity.vel.y = 0;
                }
            }

            else /*(entity.vel.y < 0)*/{
                if (entity.pos.y < match.y2){
                    entity.pos.y = match.y2;
                    entity.vel.y = 0;
                }
            }
        }
    }
 

    test(entity){

        this.checkY(entity)

    }


}