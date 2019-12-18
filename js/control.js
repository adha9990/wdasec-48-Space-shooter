document.addEventListener("keydown",(e)=>{
    if(e.key=="p") main.play = !main.play;
    rocket.keys[e.key] = true;
});
document.addEventListener("keyup",(e)=>{
    if(e.key==" ") rocket.shoot = true;
    rocket.keys[e.key] = false;
});
let move = ["a","s","d","w"];
[$("#left"),$("#bottom"),$("#right"),$("#top")].forEach((e,i)=>{
    e.addEventListener("mouseover",()=>rocket.keys[move[i]]=true);
    e.addEventListener("mouseout",()=>rocket.keys[move[i]]=false);
});
$("#add").addEventListener("click",()=>{
    let font = $("#font").innerHTML*1+1;
    $("#font").innerHTML = font;
    $("#time").style.fontSize = font;
    $("#font").style.fontSize = font;
    $("#hp_txt").style.fontSize = font;
    $("#point").style.fontSize = font;
});
$("#less").addEventListener("click",()=>{
    let font = $("#font").innerHTML*1-1;
    $("#font").innerHTML = font;
    $("#time").style.fontSize = font;
    $("#font").style.fontSize = font;
    $("#hp_txt").style.fontSize = font;
    $("#point").style.fontSize = font;
});
$("#sound_1").addEventListener("click",()=>{
    $("#sound_1").style.display = "none";
    $("#sound_2").style.display = "block";
    $("#bg_sd").pause();
});
$("#sound_2").addEventListener("click",()=>{
    $("#sound_2").style.display = "none";
    $("#sound_1").style.display = "block";
    $("#bg_sd").play();
});
$("#fire").addEventListener("click",()=>main.space.push(new bullet(rocket)));