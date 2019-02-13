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