let cancion = document.getElementById("cancion");
let cover = document.getElementById("cover");
let play_pause_btn =document.getElementById("play-pause-btn");
let controls = document.querySelector(".controls");
let is_playing = false;

function play_pause(){ 
if(is_playing){
    cancion.pause();
    cover.style.animationPlayState = "paused";
    controls.style.animationPlayState ="paused";
    play_pause_btn.innerHTML = " ▷";
    is_playing="false";
}
else{
    cancion.play();
    cover.style.animationPlayState="running";
    controls.style.animationPlayState ="running";
    play_pause_btn.innerHTML = "||";
    is_playing="true";
}
}
function repetir(){ 
    play_pause();
    cancion.play();
    cancion.currentTime=0;
    play_pause_btn.innerHTML = " ▷";
    cover.style.animationPlayState="running";
    controls.style.animationPlayState ="running"
    play_pause_btn.innerHTML = "||";
    
}
    

