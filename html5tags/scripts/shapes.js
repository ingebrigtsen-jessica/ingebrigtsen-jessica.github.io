function drawRectangle() {
    //Get Canvas Element
    let canvas = document.getElementById("drawhere");

    //Make sure canvas is supported in browswer
    if (canvas.getContext) {
        //getContext returns an object that provides methods and properties for drawing
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height);
        //Draw Rectangle - filled in
        //(x,y,width,height)
        ctx.fillRect(50, 5, 100, 100);
    }
    else {
        alert('Your browser does not support canvas');
    }
}

function drawCircle() {
    //Get Canvas Element
    let canvas = document.getElementById("drawhere");

    //Make sure canvas is supported in browswer
    if (canvas.getContext) {
        //getContext returns an object that provides methods and properties for drawing
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height);
        //Draw Circle - stroke only
        //begin path lets the canvas know you are about to draw a path
        ctx.beginPath();
        //(x, y, radius, starting angle, ending angle)
        ctx.arc(95,50,40,0,2 * Math.PI);
        ctx.stroke();
    }
    else {
        alert('Your browser does not support canvas');
    }
}

function drawTriangle() {
    //Get Canvas Element
    let canvas = document.getElementById("drawhere");

    //Make sure canvas is supported in browswer
    if (canvas.getContext) {
        //getContext returns an object that provides methods and properties for drawing
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height);
        //Draw Triangle
        //begin path lets the canvas know you are about to draw a path
        ctx.beginPath();
        //(x,y)
        //starting point
        ctx.moveTo(50,50);
        //x stays the same, the line goes to 300 for the y axis
        ctx.lineTo(50,125);
         //y stays the same, the line goes to 300 for the x axis
         ctx.lineTo(125,125);
         ctx.closePath()

         //Triangle is done, but at this point is invisible
        //Set line properties
         ctx.lineWidth = 10;
         //This sets the strokestyle for the browser - not just this shape
         ctx.strokeStyle = '#C5F5F0';
         ctx.stroke();

         //Fill properties
         //This set the fillstyle for the broswer - not just this shape
         ctx.fillStyle="#f5c5ca";
         ctx.fill();
    }
    else {
        alert('Your browser does not support canvas');
    }
}

function clearCanvas() {
    let canvas = document.getElementById("drawhere");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
