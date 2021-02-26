// // var num1 = 12;
// // var num2 = 5;

// // document.write(num1 + num2 + " For Plus" + "<br/>");
// // document.write("For Plus " + num1 + num2 );

// var a = 10;
// var b = a++; //first asign then increment
// alert("Post increment " + b); //alert 10
// alert(a); //alert 11

// var a = 10;
// var b = ++a; 
// alert("Pre increment " + a); 
// alert(b); 

// var a = 10;
// var b = a--; 
// alert(a); 
// alert(b); 

// var a = 10;
// var b = --a; 
// alert(a); 
// alert(b); 

// var a = 5;
// var c = ++a + a++;
// alert(a);
// alert(c); 

function userDetails(){
    var a = document.getElementById("userInput").value;
    var b = document.getElementById("userPassword").value;
    if(a == "" || a == " "){
        alert("Please write your email");
    }
    else if(b == "" || b == " "){
        alert("Please write your Password");
    }
    document.getElementById("useremail").innerHTML=a;
    document.getElementById("userpassword").innerHTML=b;
}
document.getElementById("useremail").style.color="blue";
document.getElementById("userpassword").style.color="red";