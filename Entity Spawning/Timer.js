//The actual 

class Timer{
    constructor(deltaTime){
        let accumulatedTime = 0;
        let lastTime = 0;

        this.flag=false;

        this.updateProxy = (time) => {

            if (!this.flag){

                accumulatedTime += (time-lastTime)/1000
                lastTime=time;
            
                //is u change tab it wont load to many actions
                if (accumulatedTime > 10*deltaTime){ accumulatedTime = 10*deltaTime}
                while (accumulatedTime > deltaTime){
                    this.update(deltaTime)
                    accumulatedTime-=deltaTime
                }
                requestAnimationFrame(this.updateProxy)
        }
        
        }

    }

    enqueue(){
        requestAnimationFrame(this.updateProxy)
    }

    start(){
        requestAnimationFrame(this.updateProxy)
    }

    pause(){
        this.flag=true;
        console.log(mario)
    }

    resume(){
        this.flag=false;
        this.lastTime = performance.now()
        requestAnimationFrame(this.updateProxy)
    }


}