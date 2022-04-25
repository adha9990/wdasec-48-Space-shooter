class time{
    constructor(){
        this.s = 0;
        this.speed = 0;
        this.fps = 0;
    }
    draw(){}
    update(){
        this.clock();
        if(this.s % 10 == 1 && this.fps==0) this.make(new oil());
        if(this.s % 10 == 2 && this.fps==0) this.make(new rock());
        if(this.s % 10 == 3 && this.fps==0) this.make(new oil());
        if(this.s % 10 == 4 && this.fps==0) this.make(new alien());
        if(this.s % 10 == 5 && this.fps==0) this.make(new oil());
        if(this.s % 10 == 6 && this.fps==0) this.make(new alien("alien"));
        if(this.s % 10 == 7 && this.fps==0) this.make(new oil());
        if(this.s % 10 == 8 && this.fps==0) this.make(new rock());
        if(this.s % 10 == 9 && this.fps==0) this.make(new oil());
        $("#time").innerHTML =this.s;
    }
    make(obj){
        obj.speed += this.speed;
        main.space.push(obj);
    }
    clock(){
        this.fps++;
        if(this.fps==120){
            this.fps = 0;
            this.s++;
            rocket.hp--;
            if(this.s % 5 == 0 && this.fps==0) this.speed++;
        }        
    }
}