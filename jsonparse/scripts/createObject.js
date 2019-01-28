function createObject(fName, lName, major) {
    let student = {firstName: fName, lastName: lName, major: major};
    console.log("Object Created \n" + student)
    let myJSON = JSON.stringify(student);
    console.log("Stringified \n" + myJSON);
    if (!fName|| !lName || !major) {
       myJSON =  "Please enter all 3 values";
    }

    document.getElementById('strung').innerHTML = myJSON;

}