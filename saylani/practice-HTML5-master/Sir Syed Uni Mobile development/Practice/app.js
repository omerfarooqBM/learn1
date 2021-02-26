// var name1; // variable declared 
// name ="Salman"; // assigning a value

// alert(name);

// var message = "Wlecome ";
// var name = "Salman";
// alert(message + name);// concatinate the two variable




function imgEvent(){
    alert('This is Void Link');
}

function imgEvent1(){
    alert('You Clicked Me..!');
}

function inputEvent(){
    alert('You Clicked Me..!');
}

function func(){
    alert("Function Working.!");
}
function colorChange(){
    document.getElementById("color").style.color='green';
    document.getElementById("color").style.textDecoration="underline";
}
 document.getElementById("color").style.textDecoration="none";
 document.getElementById("color").style.fontSize="1.5em";
function colorDefault(){
    document.getElementById("color").style.color='blue';
    document.getElementById("color").style.textDecoration="none";
}

function bckColor(){
    document.getElementById("bckColor").style.backgroundColor='Blue';
}
function bckDefualt(){
    document.getElementById("bckColor").style.backgroundColor='white';
}

 function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
 }
 function emailBckColor(){
    document.getElementById("email").style.backgroundColor='Blue';
}
function emailBckDefualt(){
    document.getElementById("email").style.backgroundColor='white';
}


function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608" :
            cityName = "Chicago";
            break;
        case "68114" :
            cityName = "Omaha";
            break;
        case "53212" :
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
 }
function zipBckColor(){
    document.getElementById("zip").style.backgroundColor='Blue';
}
function zipBckDefualt(){
    document.getElementById("zip").style.backgroundColor='white';
}


function expandLoris() {
 var expandedParagraph = " Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of "+
 "distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several "+
 "adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. " +
 " Slow lorises have a toxic bite, a rare trait among mammals.";
 document.getElementById("slowLoris").innerHTML = expandedParagraph;
 }

function nameList() {
    var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
    document.getElementById("nameList").innerHTML = listToPlace;
}

 function makeInvisible() {
    document.getElementById("hide").className = "hidden";
 }
  function rotateImg() {
    document.getElementById("rot").className = "rotate";
 }