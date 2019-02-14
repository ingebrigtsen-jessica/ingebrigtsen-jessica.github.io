function changeClasses(){

    let currentClass = document.getElementById("changeable");

    if(currentClass.className == "originalClass")
    currentClass.className = "newClass";
    else
    currentClass.className = "originalClass";
}