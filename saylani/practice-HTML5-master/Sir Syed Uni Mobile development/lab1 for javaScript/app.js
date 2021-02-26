// // variable declaration and assigning a string
var userName = "Salman ";
var myName = "Zafar";
var studentAge = "20 years old";
var uni = "SSUET";
var course="Mobile & Cloud Computing - Module A";
// variable declaration and assigning a string and disply alert message
function question3(){
    var message;
    message = "Hello World";
    alert(message);
}

// display user biodata
function question4(){
    alert(userName + myName);
    alert(studentAge);
    alert(uni);
    alert(course);
}


// display message
function question5(){
    var o = "PIZZA";
    var r1 = "PIZZ";
    var d = "PIZ";
    var e = "PI";
    var r2 = "P";
    alert(o + "\n" + r1 + "\n" + d + "\n" + e + "\n" +r2);
}


// disply user Future 
function question6(){
    var dev = "You will be a Software Developer";
    var loc = "in USA, ";
    var mer = "Married to ABC width 2 kids";
    alert(dev + loc + mer); 
}


// display user Email
function question7(){
    var message1 = "My Eamil Address is ";
    var email = "Salman.zafar292@gmail.com";
    alert(message1 + email); 
}


// disply current working steps
function question8(){
    var message2 = "I am trying to learn from the book ";
    var book = "'A smarter way to learn JavaScript'";
    alert(message2 + book);
}


 // concatinate 4 question
 function question9(){
    alert("My Name is " + userName + myName + "\n" + "I am " + studentAge + "\n" + "I study in " + uni + "\n" + course + " Classes");
}


// disply message in browser through JavaScript
 function question10(){
    var browser = "Yes! I can write HTML content through JavaScript" ;
    //document.write("<h1>"+browser+"</h2>");
    document.getElementById("display").innerHTML= "<h1>"+browser+"</h1>";
}

// display Age
function question11(){
    var age;
    age = 20;
    alert("I am "+ age +" years old");
}

 // Visited site
 var count = 0;
 function question12(){
     count++ ;
     var visi = "You have Visited this site ";
        alert(visi + count + " time..!");
 }

 //display browser
  function question13(){
     var birthYear;
     birthYear = "My Birth year is 1993";
     var messageYear = "Data type of my declared variable is number";
     document.getElementById("year").innerHTML= "<h2>"+ birthYear + "<br/>" + messageYear + "<h2>";
 }


// var year= 1993;
// var myBirth = "My birth yesr is ";
// var variable = "Data type of my declared variable is number";
// document.write("<h2>"+myBirth + year + "<br/>" + variable + "</h2>"); 

// // Online Shopping
// var website = "www.WowDress.pk";
// var visitor = "Bilal Kiyani ";
// var order = "Ordered ";
// var product = "3 T-Shirt(s) on ";

// document.write("<h2>" + visitor + order + product + website + "</h2>");

