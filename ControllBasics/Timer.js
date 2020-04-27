//The actual 

class Timer{
    constructor(deltaTime){
        let accumulatedTime = 0;
        let lastTime = 0;

        this.updateProxy = (time) => {

            accumulatedTime += (time-lastTime)/1000
            lastTime=time;
        
            while (accumulatedTime > deltaTime){
                this.update(deltaTime)
                accumulatedTime-=deltaTime
            }
            requestAnimationFrame(this.updateProxy)
        
        }

    }

    enqueue(){
        requestAnimationFrame(this.updateProxy)
    }

    start(){
        requestAnimationFrame(this.updateProxy)
    }


}