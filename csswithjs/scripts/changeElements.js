function changeBackground() {

    let myElements = document.querySelectorAll("span");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.color = "#f5c5ca";
    }
}

function changeSpanFont() {

    let myElements = document.querySelectorAll("span");

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.fontFamily = "'Dancing Script', cursive";
    }
}

function changeWithSelectors() {
    let element = document.querySelectorAll("button");
    console.log(element[6].style.backgroundColor);

    if (element[6].style.backgroundColor == "rgb(245, 197, 202)")
        element[6].style.backgroundColor = "#C5F5F0"
    else
        element[6].style.backgroundColor = "#f5c5ca";



}