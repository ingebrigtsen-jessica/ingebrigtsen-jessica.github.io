
//if the key "firstName" is empty in localStorage, have default be the first name
if (!localStorage.getItem("firstName"))
    document.getElementById("name").innerHTML = "Default";
//otherwise use the first name that the user provided
else
    document.getElementById("name").innerHTML = localStorage.getItem("firstName");

function newName(firstName) {
    localStorage.setItem("firstName", firstName);
    document.getElementById("name").innerHTML = localStorage.getItem("firstName");
}

//clear out the firstName key and refresh the page
function clearName() {
    localStorage.removeItem("firstName");
    location.reload();
}