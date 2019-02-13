
function repeatPattern(direction) {
   
    
    let canvas = document.getElementById("patternhere");
      let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        img = new Image();
    
    img.src = 'images/heart.png';
    
    img.onload = function(){
        // create pattern
        var ptrn = ctx.createPattern(img, direction); // Create a pattern with this image, and set it to "repeat".
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, canvas.width, canvas.height); // context.fillRect(x, y, width, height);
    }
}

function clearPattern() {
    let canvas = document.getElementById("patternhere");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}