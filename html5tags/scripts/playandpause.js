let video = document.getElementById("spirit");
video.controls = true;

let barSize=400;
let bar = document.getElementById("defaultbar");
let progressbar = document.getElementById("progressbar");


function playorpause() {
    
    let video2 = document.getElementById("spirit2");

    if (video2.paused){
        video2.play();
    }
    else {
        video2.pause();
    }

}

function playorpauseaudio() {
    let audio = document.getElementById("rejoice");
     
    if(audio.paused){
    audio.play();
    updateTime = setInterval(update,500);
    }
    else
    audio.pause();
}

function update() {
    let audio = document.getElementById("rejoice");
    let size = parseInt(audio.currentTime*barSize/audio.duration);
    progressbar.style.width = size + "px";
}


