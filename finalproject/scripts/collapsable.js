let teams = document.getElementsByClassName("teams");

for(let i = 0; i < teams.length; i++){
    teams[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }else {
            content.style.display = "block"
        }
    });
}


