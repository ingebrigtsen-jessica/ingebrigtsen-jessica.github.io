function numberFunction(guess) {
    let x = Math.floor(Math.random() * 5);
    guess = parseInt(guess);
    let result = "";

    if(x == guess){
    result = "You guessed it!"
    }
    else if(!guess){
    result = "Enter a number first!"
    }
    else if(guess > 5 || guess < 0){
        result = "Enter a number between 0 and 5";
    }
    else{
    result = "Not quite! The number was: " + x;
    }
    

    document.getElementById("results").innerHTML=result;
}