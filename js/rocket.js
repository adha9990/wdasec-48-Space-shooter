class rocket{
    constructor(){
        this.canvas = $("#space");
        this.ctx = this.canvas.getContext("2d");
        this.image = new Image();
        this.image.src = "source/image/rocket.svg";
        this.name = "rocket";
        this.x = 0;
        this.y = 100;
        this.images = ["rocket.svg","rocket1.svg"];
        this.fps = 0;
        this.index = 0;
        this.keys = [];
        this.shoot = true;
        this.speed = 3;
        this.hp = 15;
    }
    draw(){
        this.w = this.image.width/2;
        this.h = this.image.height/2;
        this.ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
    }
    update(){
        this.change();
        this.key();
        this.collision();
        if(this.hp<0) this.hp = 0;
        $("#hp_txt").innerHTML = this.hp;
        $("#hp_line").style.width = this.hp*10;
        if(this.hp == 0){
            main.play = false;
            $("#input").style.display = "block";
        }
    }
    collision(){
        main.space.forEach(e=>{
            if(collision(this,e) && this != e){
                if(e.name=="rock"){
                    $("#de_sd").play();
                    this.hp -= 15;
                    e.clear();
                    main.point += 10;
                }
                if(e.name=="alien"){
                    $("#de_sd").play();
                    main.point += 5;
                    this.hp -= 15;
                    e.clear();
                }
                if(e.name=="friend_alien"){
                    $("#de_sd").play();
                    this.hp -= 15;
                    main.point -= 10;
                    e.clear();
                }
                if(e.name=="oil"){
                    this.hp += 15;
                    if(this.hp>30) this.hp = 30;
                    e.clear();
                }
            }
        })
    }
    change(){
        this.fps++;
        if(this.fps==15){
            this.fps=0;
            this.index = (this.index + 1) % this.images.length;
            this.image.src = "source/image/" + this.images[this.index];
        }
    }
    key(){
        if(this.keys["a"]){
            if(this.x>0){
                this.x-=this.speed;
            }
        }
        if(this.keys["s"]){
            if(this.y+this.h<600){
                this.y+=this.speed;
            }
        }
        if(this.keys["d"]){
            if(this.x+this.w<960){
                this.x+=this.speed;
            }
        }
        if(this.keys["w"]){
            if(this.y>0){
                this.y-=this.speed;
            }
        }
        if(this.keys[" "] && this.shoot){
            $("#sh_sd").play();
            this.shoot = false;
            main.space.push(new bullet(this));
        }
    }
}