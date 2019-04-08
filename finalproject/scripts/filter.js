function searchFunction() {
    let input = document.getElementById("searchList");
    let name = input.value.toUpperCase();
    let card = document.getElementsByClassName('card');

    for (let i = 0; i < card.length; i++){
        let teams = card[i].getElementsByTagName('h2')[0];
        let value = teams.textContent || teams.innerText;
        if (value.toUpperCase().indexOf(name) > -1){
            card[i].style.display="";
        } else {
            card[i].style.display = "none";
        }
    }
}