class oil extends tool{
    constructor(){
        super("space","oil.png","oil",Math.floor(Math.random()*900),-500,51,60,0,0,51,60);
        this.speed = 3;
    }
    update(){
        this.y += this.speed;
        if(this.y>600) this.clear();
    }
    clear(){
        let index = main.space.indexOf(this);
        main.space.splice(index,1);
    }
}