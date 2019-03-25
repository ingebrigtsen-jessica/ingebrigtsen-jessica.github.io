function searching() {
    let input = document.getElementById('westInput');
    let search = input.nodeValue.toUpperCase();
    let list = document.getElementsByClassName('teams');
    let team = list[0].getElementsByTagName('a');
    let txtValue, teamName;

    for (let i = 0; i < team.length; i++){
        teamName = team[i].getElementsByTagName('')
       txtValue = team.textContent || team.innerText;
       if(txtValue.toUpperCase().indexOf(search) > -1){
           team[i].style.display = ("");
       } else {
            team[i].style.display = "none";
       }
    }
}