var main = {
    background : [],
    space : [],
    play : false,
    point : 0,
    start(){
        main.update();
        requestAnimationFrame(main.start);
    },
    update(){
        $("#background").getContext("2d").clearRect(0,0,960,600);
        $("#space").getContext("2d").clearRect(0,0,960,600);
        if(this.play){
            this.background.forEach(e=>e.update());
            this.space.forEach(e=>e.update());
        }
        this.background.forEach(e=>e.draw());
        this.space.forEach(e=>e.draw());
        $("#point").innerHTML = this.point;
    }
}
function init(){
    main.background.push(
        new time(),
        new background(),
        new global(),
        new mars(),
        new jupiter(),
        new saturn(),
        new uranus(),
    );
    main.space.push(
        rocket = new rocket,
    );
    main.start();   
}
function play(){
    main.play=true;
    $("#menu").style.display = "none";
}
function howtoplay(){
    $("#description").style.display = "block"
}
function input(){
    let name = $("#name").value;
    let time = $("#time").innerHTML;
    let score = $("#point").innerHTML;
    fetch("register.php",{
        method:"POST",
        header:{
            "accept":"application/json",
            "Context-Type":"application/json",
        },
        body:JSON.stringify({
            name:name,
            time:time,
            score:score,
        }),      
    })
    .then(res=>res.json())
    .then(res=>{
        $("#rank").style.display = "block";
        res.sort((a,b)=>a.time-b.time).sort((a,b)=>b.score-a.score);
        res.forEach((e,i)=>{
            $("#tbody").innerHTML+="<tr><td>"+(i*1+1)+"</td><td>"+e.name+"</td><td>"+e.time+"</td><td>"+e.score+"</td></tr>";
        });        
    })
}
class tool{
    constructor(canvas,url,name,x,y,w,h,sx,sy,sw,sh){
        this.canvas = $("#"+canvas);
        this.ctx = this.canvas.getContext("2d");
        this.image = new Image();
        this.image.src = "source/image/"+url;
        this.name = name;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
    }
    draw(){
        this.ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.w,this.h);
    }
}
function collision(r1,r2){
    return r1.x < r2.x + r2.w &&
           r1.x + r1.w > r2.x &&
           r1.y < r2.y + r2.h &&
           r1.y + r1.h > r2.y ;
}