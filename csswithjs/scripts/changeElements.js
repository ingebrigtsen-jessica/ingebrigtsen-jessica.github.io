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
        let myElements = document.querySelectorAll("span");
        myElements[4].style.backgroundColor = "#f1fdfb";
    


    }