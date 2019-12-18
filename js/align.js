class alien extends tool{
    constructor(name){
        if(name=="alien"){
            super("space","alien.png","alien",1000,Math.floor(Math.random()*500),321/4,81,0,0,321/4,81);
        }else{
            super("space","friend_alien.png","friend_alien",1000,Math.floor(Math.random()*500),321/4,81,0,0,321/4,81);
        }        
        this.point = 10;
        this.speed = 2;
        this.fps = 0;
        this.index = 0;
        this.delay = 8;
        this.shooting = 999;
    }
    update(){
        this.x -= this.speed;
        if(this.x<-500) this.clear();
        this.change();
        this.sht();
    }
    sht(){
        if(this.name=="alien" && this.shooting>=this.delay){
            this.shooting = 0;
            main.space.push(new bullet(this));
        }
    }
    change(){
        this.fps++;
        if(this.fps==15){
            this.shooting++;
            this.fps=0;
            this.index = (this.index+1)%4;
            this.sx = (321/4)*this.index;            
        }        
    }
    clear(){
        let index = main.space.indexOf(this);
        main.space.splice(index,1);
    }
}