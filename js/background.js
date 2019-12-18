class background extends tool{
    constructor(){
        super("background","background.jpg","background",0,0,960,600,0,0,960,600);
        this.speed = 2;
    }
    update(){
        this.sx+= this.speed;
        if(this.sx>900) this.sx=0;
    }
}
class global extends tool{
    constructor(){
        super("background","global.png","global",0,0,512/4,512/4,0,0,512,512);
        this.speed = 2.4;
    }
    update(){
        this.x -= this.speed;
        if(this.x<-500){
            this.x = 1000;
            this.y = Math.floor(Math.random()*500)
        }
    }
}
class mars extends tool{
    constructor(){
        super("background","mars.png","mars",0,0,384/4,385/4,0,0,384,385);
        this.speed = 2.6;
    }
    update(){
        this.x -= this.speed;
        if(this.x<-500){
            this.x = 1000;
            this.y = Math.floor(Math.random()*500);
        }
    }
}
class jupiter extends tool{
    constructor(){
        super("background","jupiter.png","jupiter",0,0,384/4,385/4,0,0,384,385);
        this.speed = 1.8;
    }
    update(){
        this.x -= this.speed;
        if(this.x<-500){
            this.x = 1000;
            this.y = Math.floor(Math.random()*500);
        }
    }
}
class saturn extends tool{
    constructor(){
        super("background","saturn.png","saturn",0,0,403/4,232/4,0,0,403,232);
        this.speed = 1.6;
    }
    update(){
        this.x -= this.speed;
        if(this.x<-500){
            this.x = 1000;
            this.y = Math.floor(Math.random()*500);
        }
    }
}
class uranus extends tool{
    constructor(){
        super("background","uranus.png","uranus",0,0,403/4,322/4,0,0,403,322);
        this.speed = 1.3;
    }
    update(){
        this.x -= this.speed;
        if(this.x<-500){
            this.x = 1000;
            this.y = Math.floor(Math.random()*500);
        }
    }
}