//mouse over
document.getElementById('pink').addEventListener("mouseover", function() {
    changeColor(1);
});
document.getElementById('blue').addEventListener("mouseover", function() {
    changeColor(2);
});
document.getElementById('white').addEventListener("mouseover", function() {
    changeColor(3);
});

//mouse out
document.getElementById('pink').addEventListener("mouseout", mouseOut);
document.getElementById('blue').addEventListener("mouseout", mouseOut);
document.getElementById('white').addEventListener("mouseout", mouseOut);

function changeColor(color) {

    let results = document.getElementsByClassName('results')[0];

    switch (color) {
        case "pink":
        case 1:
            results.style.background = "#f5c5ca";
            break;
        case "blue":
        case 2:
            results.style.background = "#C5F5F0";
            break;
        case "white":
        case 3:
            results.style.background = "#f1fdfb";
            break;
        default:
        alert = "sorry!";
            break;

    }
}


function mouseOut(){
    let results = document.getElementsByClassName('results')[0];
    results.style.background = "transparent";

}