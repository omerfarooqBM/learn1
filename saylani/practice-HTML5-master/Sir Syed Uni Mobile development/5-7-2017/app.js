let inputs;

function display(value) {
    return document.getElementById("display").innerHTML += value;
}
function Plus() {
    let plus = "+";
    console.log("plus", plus);
    display(plus);
}

function nine() {
    let nine = 9;
    display(nine)
}


// let array=["Red","Green","Blue"];

// function first(){
//     document.getElementById("values").innerText= array[0];
// }
// function second(){
//     document.getElementById("values").innerText= array[1];
// }
// function third(){
//     document.getElementById("values").innerText= array[2];
// }

// function Display(){
//     document.getElementById("first").style.display="none";
//     document.getElementById("second").style.display="none";
//     document.getElementById("third").style.display="none";    
// }

// function first(){
//     Display();
//     document.getElementById("first").style.display= "block";
// }
// function second(){
//     Display();
//     document.getElementById("second").style.display= "block";
// }
// function third(){
//     Display();
//     document.getElementById("third").style.display= "block";    
// }

var myLoop = ["Salman", "Bilal", "Shahid"];
function MyList() {
    document.getElementById("list").innerHTML = "";
    for (i = 0; i < myLoop.length; i++) {
        document.getElementById("list").innerHTML += "<li>" + myLoop[i] + "</li>"
    }
}
MyList()
function NewList() {
    myLoop.push(prompt("Enter new String"));
    MyList()
}
