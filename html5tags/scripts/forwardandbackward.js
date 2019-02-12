function changeposition(amount) {
    let video = document.getElementById("spirit");

    video.currentTime += amount;
}

function changeaudioposition(amount){
    let audio = document.getElementById("rejoice");

    audio.currentTime += amount;
}