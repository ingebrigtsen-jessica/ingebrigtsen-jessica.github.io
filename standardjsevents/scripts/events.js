function changeColor(color) {

    let results = document.getElementsByClassName('results')[0];

    switch (color) {
        case "pink":
            results.style.background = "#f5c5ca";
            break;
        case "blue":
            results.style.background = "#C5F5F0";
            break;
        case "white":
            results.style.background = "#f1fdfb";
            break;
        default:
        alert = "sorry!";
            break;

    }
}