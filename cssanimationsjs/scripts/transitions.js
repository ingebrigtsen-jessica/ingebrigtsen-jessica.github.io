function changeColor(color) {
    let box = document.getElementById("box1");

    box.style.transition = "background 1.5s linear 0s";
    box.style.background = color;
}

function changeZoom() {
    let box = document.getElementsByClassName('box2')[0];
    box.classList.toggle('changeZoom');
}

function changeStretch() {
    let box = document.getElementsByClassName('box3')[0];
    let button = document.getElementsByClassName('pausebtn')[0];
    if(button.innerHTML === "Stretch")
        button.innerHTML = "Shrink";
        else
        button.innerHTML = "Stretch"
    box.classList.toggle('changeStretch');



}