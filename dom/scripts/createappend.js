function create() {
    //first create the new element.
    let item = document.createElement("LI");
    //Then a text node has to be created to hold the text
    let description = document.createTextNode("Laundry");
    //Now we have to append the text to the list element
    item.appendChild(description);
    //Now that we have the list item already, we need to add it to the HTML list
    document.getElementById("todo").appendChild(item);
}

function insert() {
    //the first steps are the same, I have to create the new item
    let item = document.createElement("LI");
    let description = document.createTextNode("Laundry");
    item.appendChild(description);

    //in order to work with the list, I need to access it
    let todo = document.getElementById("todo2");
    //now I need to add it to my list. I'd like to get the laundry done after my homework
    todo.insertBefore(item, todo2.childNodes[2]);
    
}

