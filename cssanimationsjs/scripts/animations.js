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