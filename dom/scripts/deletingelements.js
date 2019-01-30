function remove(number) {
    //first get the list
    let todo = document.getElementById("todo3").children;
    //next remove the given item (-1 to account for indexes)
    let x = number - 1;
    let done = todo[x];
    done.remove();
}

function checkoff(number) {
    console.log(number);
    if (!number) {
        return;
    }
    let todo = document.getElementById("todo3");

    if (number == 1) {
        todo.removeChild(todo.firstElementChild);
    }
    else
        todo.removeChild(todo.lastElementChild);

}

