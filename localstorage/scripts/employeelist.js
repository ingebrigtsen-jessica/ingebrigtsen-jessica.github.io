
//if the employee list is empty in localStorage
if (!localStorage.getItem("employees"))
    document.getElementById("employeeList").innerHTML = "";
//otherwise display the list
else {
    let display = JSON.parse(localStorage.getItem("employees"));
    for (let i in display){
        document.getElementById("employeeList").innerHTML += i + " : " + display[i] + "<br>";
        }
}

function displayTitles() {
    let employeeTitles = {};
    employeeTitles["President"] = "Beverly";
    employeeTitles["Vice President"] = "Murray";
    employeeTitles["Chief of Staff"] = "Erica";
    employeeTitles["Press Secretary"] = "Barry";
    employeeTitles["Speech Writer"] = "Adam";
    

    localStorage.setItem("employees", JSON.stringify(employeeTitles));

    for (let i in employeeTitles){
    document.getElementById("employeeList").innerHTML += i + " : " + employeeTitles[i] + "<br>";
    }
}

//clear out the employeeList key and refresh the page
function clearEmployees() {
    localStorage.removeItem("employees");
    location.reload();

}