function searchFunction() {
    // let input = document.getElementById("searchList");
    // let name = input.value.toUpperCase();
    // let card = document.getElementsByClassName('card');

    // for (let i = 0; i < card.length; i++){
    //     let teams = card[i].getElementsByTagName('h2')[0];
    //     let value = teams.textContent || teams.innerText;
    //     if (value.toUpperCase().indexOf(name) > -1){
    //         card[i].style.display="";
    //     } else {
    //         card[i].style.display = "none";
    //         card[i].style.display = "-webkit-appearance: none;";
    //     }
    // }

    var input, filter, container, card, heading, i, txtValue;
    input = document.getElementById('searchList');
    filter = input.value.toUpperCase();
    container = document.getElementById('container');
    card = document.getElementsByClassName('card');
    
    for (i = 0; i < card.length; i++) {
        heading = card[i].getElementsByTagName('h2')[0];
        txtValue = heading.textContent || heading.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "block";
        } else {
            card[i].style.display = "none";
        }
    }
}