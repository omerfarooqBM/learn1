//Q:4 for variable

function bioData() {
    var userName = " Salman Zafar";
    var studentAge = "20 years old";
    var uni = "SSUET";
    var course = "Mobile & Cloud Computing - Module A";
    swal({
        title: " Student Bio Data",
        text: "Name: " + userName + "\n" +
        "Age: " + studentAge + "\n" +
        "University: " + uni + "\n" +
        "Course: " + course
    });
}
function bioCode() {
    window.open("code/Variable-for-Strings/bioCode.html");
}

//Q:5 for variable

function pizza() {
    var o = "PIZZA";
    var r1 = "PIZZ";
    var d = "PIZ";
    var e = "PI";
    var r2 = "P";
    swal({
        title: "pizza",
        text: o + "\n" + r1 + "\n" + d + "\n" + e + "\n" + r2
    });
}
function pizzaCode() {
    window.open("code/Variable-for-Strings/pizzaCode.html");
}

//Q:6 for variable

function job() {
    var dev = "You will be a Software Developer";
    var loc = " in USA, ";
    var mer = "Married to ABC width 2 kids";
    swal({
        title: "Fortune Yourself",
        text: dev + loc + mer
    });
}
function jobCode() {
    window.open("code/Variable-for-Strings/jobCode.html");
}

//Q:7 for Email address

function email() {
    var message1 = "My Eamil Address is ";
    var email = "Salman.zafar292@gmail.com";
    swal({
        title: 'Email Address',
        text: message1 + email
    })
}

function emailCode() {
    window.open("code/Variable-for-Strings/email-code.html");
}

//Q:8 for book

function book() {
    var message2 = "I am trying to learn from the book";
    var book = "'A smarter way to learn JavaScript'";
    swal({
        title: 'My Book',
        text: message2 + book
    });
}

function bookCode() {
    window.open("code/Variable-for-Strings/book-code.html");
}

//Q:9 student Deatils

function studentDetail() {
    var fName = "Salman";
    var lName = "Zafar";
    var studentAge = "20 years old";
    var uni = "SSUET";
    var course = "Mobile & Cloud Computing - Module A";
    swal({
        title: "Student Deatil",
        text: "My Name is " + fName + " " + lName + "\n" + "I am " +
        studentAge + "\n" + "I study in " + uni + "\n" + course + " Classes"
    });
}

function studentDetailCode() {
    window.open("code/Variable-for-Strings/student-detail.html");
}

//Q:10 print browser

function browser() {
    var browser = "Yes! I can write HTML content through JavaScript";
    document.getElementById('browser').innerHTML = browser;
}

function browserCode() {
    window.open("code/Variable-for-Strings/browser.html");
}

// Variables for numbers

//Q:2 N times
var count = 1;
function nthTimes() {
    var visi = "You have Visited this site ";
    swal({
        title: "Page Count",
        text: visi + count,
    });
    console.log("count", count)
    count++;
}

function nthTimesCode() {
    window.open("code/Variable-for-Numbers/count.html");
}

//Q:3 birthYear

function birthYear() {
    var birthYear;
    birthYear = "My Birth year is 1993";
    var messageYear = "Data type of my declared variable is number";
    swal({
        title: "Birth Year",
        text: birthYear + "\n" + messageYear,
    });
}

function birthYearCode() {
    window.open("code/Variable-for-Numbers/birthyear.html");
}

//Q:4 

function clothing() {
    var user = "John Doe ordered 5 T-shirt(s) on XYZ Clothing store";
    swal({
        title: "Clothing store",
        text: user,
    });
}
function clothingCode() {
    window.open("code/Variable-for-Numbers/clothing.html");
}

// Math Expressions------------------------------------------------------


//Q:1 sum of numbers
function checkNumber() {
    var first = document.getElementById('number1').value;
    var second = document.getElementById('number2').value;
    var sum = parseInt(first) + parseInt(second);

    swal({
        title:'',
        text: "Sum of to Numbers is: "+ sum,
    });

    first = document.getElementById('number1').value ='';
    second = document.getElementById('number2').value ='';
    
}

function SumCode() {
    window.open("code/Math-expressions/sumOfTwo.html");
}