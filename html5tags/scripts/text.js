function textFill() {
   //Get Canvas Element
   let canvas = document.getElementById("texthere");

   //Make sure canvas is supported in browswer
   if (canvas.getContext) {
       //getContext returns an object that provides methods and properties for drawing
       let ctx = canvas.getContext('2d');

       ctx.fillStyle = "#C5F5F0";
       ctx.font = "60px Comic Sans MS";
       ctx.textAlign = "center";
       ctx.fillText("Canvas", 100, 100);
       
   }
   else {
       alert('Your browser does not support canvas');
   }
}

function textStroke() {
    //Get Canvas Element
    let canvas = document.getElementById("texthere");
 
    //Make sure canvas is supported in browswer
    if (canvas.getContext) {
        //getContext returns an object that provides methods and properties for drawing
        let ctx = canvas.getContext('2d');
 
        ctx.strokeStyle = "#f5c5ca";
        ctx.lineWidth = 2;
        ctx.font = "60px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.strokeText("Canvas", 100, 100);
        
    }
    else {
        alert('Your browser does not support canvas');
    }
 }


function clearText() {
    let canvas = document.getElementById("texthere");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
}