function spinner() {

    let triangle = document.getElementsByClassName('box4')[0];
    let button = document.getElementsByClassName('spinbtn')[0];

    if (button.innerHTML == "Spin") {
        button.innerHTML = "Reset";
    }
else {
    button.innerHTML = "Spin";

}

triangle.classList.toggle("rotate");

}

function moving() {
    let circle = document.getElementsByClassName('box5')[0];
    let button = document.getElementsByClassName('movebtn')[0];

    if(button.innerHTML == "Move"){
        button.innerHTML = "Pause";
        circle.classList.add("walkAbout");
        circle.classList.remove("pauseWalk");
    }else {
        button.innerHTML = "Move";
        circle.classList.add("pauseWalk");
    }
}

function reset() {
    let circle = document.getElementsByClassName('box5')[0];
    circle.classList.remove("walkAbout");
}

function combine() {
    let square = document.getElementsByClassName('box6')[0];
    square.classList.add("spinMove");
    
}