let student = {
    firstName: "Fred",
    lastName: "Flinstone",
    gpa: 3.5
};

function Student(first, last, gpa) {
    this.firstName = first;
    this.lastName = last;
    this.gpa = gpa
    this.info = function () {
        return this.firstName + " " + this.lastName + " " + this.gpa;
    }
};

function simpleObject() {


    document.getElementById("simple").innerHTML = student.firstName + " " + student.lastName + " " + student.gpa;
}

function simpleAdd() {
    student.major = "Web Development";
    document.getElementById("simpleAdd").innerHTML = student.major;
}

function objectMethod() {
    student.info = function () {
        return this.lastName + " " + this.gpa;
    }

    document.getElementById("methodAdd").innerHTML = student.info();
}

function constructorCreate() {


    let valedictorian = new Student("Barney", "Rubble", 4.0);
    let honors = new Student("Wilma", "Flinstone", 3.4);

    document.getElementById("constructors").innerHTML = valedictorian.info() + "<br>" + honors.info();
}

function constructorAdd() {

    let valedictorian = new Student("Barney", "Rubble", 4.0);
    let honors = new Student("Wilma", "Flinstone", 3.4);

    valedictorian.speech = "'What Comes Next'";
    valedictorian.getSpeech = function () {
        return this.speech;
    }

    document.getElementById("addSpeech").innerHTML = valedictorian.getSpeech();
    document.getElementById("speechInfo").innerHTML = "This property and method has ONLY been added to the valedictorian object.";
}

function prototypeAdd() {
    let valedictorian = new Student("Barney", "Rubble", 4.0);
    let honors = new Student("Wilma", "Flinstone", 3.4);

    Student.prototype.speechTitle = " ";
    Student.prototype.speechInfo = function() {
        return this.speechTitle;
    }
    honors.speechTitle = "Honors Speech";
    valedictorian.speechTitle = "Next Up";

    document.getElementById("protoAdd").innerHTML = "Honor's Speech: " + honors.speechInfo() + "<br>" + "Valedictorian's Speech: " + valedictorian.speechInfo();
}