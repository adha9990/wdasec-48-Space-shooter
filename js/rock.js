class rock extends tool{
    constructor(){
        super("space","rock.png","rock",1000,Math.floor(Math.random()*500),512/4,512/4,0,0,512,512);
        this.hp = 2;
        this.point = 10;
        this.speed = 3;
    }
    update(){
        this.x -= this.speed;
        if(this.x<-500) this.clear();
    }
    clear(){
        let index = main.space.indexOf(this);
        main.space.splice(index,1);
    }
}