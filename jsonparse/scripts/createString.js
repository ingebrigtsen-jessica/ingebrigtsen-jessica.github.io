function createString(color, number, dessert){
    if(!color || !number || !dessert) {
        document.getElementById("parsed").innerHTML = "Please enter all 3 values";
        return;
    }
    let myFavorites = '{"color": "'+color+'", "number":"'+number+'", "dessert":"'+dessert+'"}'
    console.log(myFavorites);

    let favorites = JSON.parse(myFavorites);

    document.getElementById("parsed").innerHTML = "Color: " + favorites.color + ", Number: " +  favorites.number + ", Dessert: " + favorites.dessert;

}