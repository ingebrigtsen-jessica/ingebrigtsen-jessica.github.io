function changetag() {

    //This method returns all of the child elements of a particular tag in a Node list.
    //To change the innerHTML of 1 tag you need to reference it's place in the Node List like this:
    document.getElementsByTagName("P")[4].innerHTML = "You will need to refresh the page to load the original content in this paragraph tags";
    //Useful - unless another paragraph element gets added before this one. Then this code would have to be changed.
}

function changetags() {
    //To change ALL tags in a document, you will need to first store the node list in a variable
    let nodeList = document.getElementsByTagName("P");
    //We now need to loop through the node list to access each <p> element individually to change the innerHTML
    let i = 0;
    for (i; i < nodeList.length; i++) {
        nodeList[i].innerHTML = "You'll need to refresh again!"
    }
}

function changeclass() {
    document.getElementsByClassName("classchange")[1].innerHTML = "This changes just this part of the class";
}

function changeAllClasses() {
    let list = document.getElementsByClassName("classchange");
    let i = 0;
    for (i; i < list.length; i++) {
        list[i].innerHTML = "The Downside is that all elements have to have the class name added";
    }
}

function classdivs() {
    let list = document.getElementsByClassName("wholediv");
    let i = 0;
    for (i; i < list.length; i++) {
        list[i].innerHTML = "It will replace all exisitng content, making the child class names a moot point.";

    }
}

function countclass() {
    let classList = document.getElementsByClassName("wholediv").getElementsByTagName("P");
    document.getElementById("answer2").innerHTML = classList.length;

}

function combinedQueries() {
    let nodeList = document.getElementById("combined").getElementsByTagName("P");
    let i = 0;
    for (i; i < nodeList.length; i++) {
        nodeList[i].innerHTML = "Only we changed this time"
    }

}

function countingPs() {
    let nodeList = document.getElementById("combined").getElementsByTagName("P");
    document.getElementById("answer").innerHTML = nodeList.length;
}
