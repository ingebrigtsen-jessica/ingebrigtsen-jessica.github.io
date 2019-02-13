function colorLinear() {
    let canvas = document.getElementById("colorhere");
    let ctx = canvas.getContext("2d");

    //(x start, y start, x end, y end)
    let gradient = (ctx.createLinearGradient(0,0,170,0))

    //a value betwen 0.0 and 1.0 represents position between start and end in gradient
    gradient.addColorStop(0, "#C5F5F0");
    gradient.addColorStop(1,"#f5c5ca");

    //make fillstyle the new gradient (for browser)
    ctx.fillStyle = gradient;

    //draw a rectangle
    ctx.fillRect(30,30,150,100);
}

function colorRadial() {

    let canvas = document.getElementById("colorhere");
    let ctx = canvas.getContext("2d");

    //(x start, y start, radius start, x end, y end, radius end)
    let gradient = (ctx.createRadialGradient(75,50,5,90,60,100))

    //a value betwen 0.0 and 1.0 represents position between start and end in gradient
    gradient.addColorStop(0, "#f5c5ca");
    gradient.addColorStop(1,"#C5F5F0");

    //make fillstyle the new gradient (for browser)
    ctx.fillStyle = gradient;

    //draw a rectangle
    ctx.fillRect(30,30,150,100);
}

function clearColors() {
    let canvas = document.getElementById("colorhere");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
}