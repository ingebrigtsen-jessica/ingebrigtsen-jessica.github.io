
//if the fred is empty in localStorage
if (!localStorage.getItem("fredFlin"))
    document.getElementById("showfred").innerHTML = "";
//otherwise display the list
else {
    let display = JSON.parse(localStorage.getItem("fredFlin"));
    for (let i in display) {
        document.getElementById("showfred").innerHTML += display[i] + "<br>";
    }
}

//if the barney is empty in localStorage
if (!localStorage.getItem("barneyRub"))
    document.getElementById("showbarney").innerHTML = "";
//otherwise display the list
else {
    let display = JSON.parse(localStorage.getItem("barneyRub"));
    for (let i in display) {
        document.getElementById("showbarney").innerHTML += display[i] + "<br>";
    }
}

function revealFred() {
    if (!document.getElementById("showfred").innerHTML) {
        let flinstone = { "firstname": "Fred", "lastName": "Flinstone", "wife": "Wilma", "child": "Pebbles" }
        for (let x in flinstone) {
            document.getElementById("showfred").innerHTML += flinstone[x] + "<br>";
        }
        localStorage.setItem("fredFlin", JSON.stringify(flinstone));
    }

}

function revealBarney() {
    if (!document.getElementById("showbarney").innerHTML) {
        let rubble = { "firstname": "Barney", "lastName": "Rubble", "wife": "Betty", "child": "BamBam" }
        for (let x in rubble) {
            document.getElementById("showbarney").innerHTML += rubble[x] + "<br>";
        }
        localStorage.setItem("barneyRub", JSON.stringify(rubble));
    }

}

//clear out the fred and barney key and refresh the page
function clearPeople() {
    localStorage.removeItem("fredFlin");
    localStorage.removeItem("barneyRub");
    location.reload();

}

function clearFred(){
    localStorage.removeItem("fredFlin");
    location.reload();
}

function clearBarney() {
    localStorage.removeItem("barneyRub");
    location.reload();
}
