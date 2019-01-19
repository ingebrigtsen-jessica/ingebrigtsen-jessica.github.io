function sortFunction(){
    let animals = document.getElementById('animalList').innerHTML;
    let animalSort = animals.split('<br>');
    
    let mammals = new Array(3);
    let reptiles = new Array(3);
    let fowls = new Array(3);
    
    let x = 0;
    let m = 0;
    let r = 0;
    let f = 0;

    for(let i = 0; i < animalSort.length; i++){
        if (x == 0){
            mammals[m] = animalSort[i];
            m++;
            x++;
        }
        else if (x == 1) {
            reptiles[r] = animalSort[i];
            r++;
            x++;
        }
        else if (x == 2) {
        fowls[f] = animalSort[i];
        f++;
        x = 0;
        }
   
    }
    mammals = mammals.sort();
    reptiles = reptiles.sort();
    fowls = fowls.sort();

    document.getElementById("mammal").innerHTML = mammals.join("<br>");
    document.getElementById("reptile").innerHTML = reptiles.join("<br>");
    document.getElementById("fowl").innerHTML = fowls.join("<br>");
}