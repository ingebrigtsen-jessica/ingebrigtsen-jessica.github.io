
//if the grocerylist is empty in localStorage
if (!localStorage.getItem("groceries"))
    document.getElementById("groceryList").innerHTML = "Nothing to Buy!";
//otherwise display the list
else {
    let display = JSON.parse(localStorage.getItem("groceries"));
    document.getElementById("groceryList").innerHTML = display.join("");
}

function addItem(item) {

    let listArray = new Array(3);
    listArray[0] = "Cereal<br>";
    listArray[1] = "Ice Cream<br>";
    listArray[2] = "Apples<br>";

    if (!item) {
        document.getElementById("warning").innerHTML = "Please Enter an item to be added to the list";
        return;
    }
    else {
        listArray.push(item);
        localStorage.setItem("groceries", JSON.stringify(listArray));
        document.getElementById("groceryList").innerHTML = listArray.join("");

    }
}
//clear out the groceryList key and refresh the page
function clearList() {
    localStorage.removeItem("groceries");
    location.reload();

}