class bullet extends tool{
    constructor(parent){
        if(parent.name == "rocket"){
            super("space","line.png","bullet",parent.x+parent.w,parent.y+parent.h/2,100/2,22/2,0,0,100,22);
        }else{
            super("space","line2.png","bullet",parent.x-100,parent.y+parent.h/2,100/2,22/2,0,0,100,22);
        }        
        this.parent = parent;
        this.speed = 3;
    }
    update(){
        if(this.parent.name == "rocket"){
            this.x += this.speed;
        }else{
            this.x -= this.speed;
        }    
        if(this.x>1000||this.x<-500) this.clear();
        this.collision();
    }
    clear(){
        let index = main.space.indexOf(this);
        main.space.splice(index,1);
    }
    collision(){
        main.space.forEach(e=>{
            if(collision(this,e) && this != e){
                if(this.parent.name=="alien" && e.name == "rocket"){
                    e.hp -= 15;
                    this.clear();
                }
                if(this.parent.name=="rocket" && e.name == "rock"){
                    $("#de_sd").play();
                    e.hp--;
                    if(e.hp<=0){
                        main.point += 10
                        e.clear();
                    }
                    this.clear();
                }
                if(this.parent.name=="rocket" && e.name == "alien"){
                    $("#de_sd").play();
                    main.point += 5
                    e.clear();
                    this.clear();
                }
                if(this.parent.name=="rocket" && e.name == "friend_alien"){
                    $("#de_sd").play();
                    main.point -= 10
                    e.clear();
                    this.clear();
                }
            }
        });
    }
}