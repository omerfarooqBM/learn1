/*
var a ="2";
var b ="2";
var c="10";

var function2 = (parseInt(a) + parseInt(b))* parseInt(c);

function plus(a,b,c){
    alert(function2);
}
*/

// function plus(){
//     var a =prompt("Please Enter you number for Plus:","1st");
//     var b =prompt("Please Enter you number for Plus:","2st");
//     var c=prompt("Please Enter you number for Multiply:","3st");
//     var function2 = (parseInt(a) + parseInt(b))* parseInt(c);
//     alert(function2);
// }


// function plus(){
//     var a =prompt("Please Enter you number for Plus:","1st");
//     var b =prompt("Please Enter you number for Plus:","2st");
//     var c=prompt("Please Enter you number for Multiply:","3st");
//     var function2 = (parseInt(a) + parseInt(b))* parseInt(c);
//     if(isNaN(function2)){
//         alert("Please Write Valid Number");
//     }
//     else
//         alert(function2);
// }

// function squareNumber(aNumber){
//     var result = aNumber * aNumber;
//     return result;
// }
// var a =squareNumber(2);
// var b =squareNumber(3);
// var c =squareNumber(4);
// console.log(a);
// console.log(b);
// console.log(c);


// function arrayFunction(){
//     var arr1 = prompt("Please Enter your Value:",);
//     var arr2 = prompt("Please Enter your Value:",);
//     var arr3 = prompt("Please Enter your Value:",);
//     var totalvalues=[];
//     for(var i = 0; i<totalvalues.length;i++){
//         totalvalues =arr1.push();
//         totalvalues =arr2.push();
//         totalvalues =arr3.push();
        
//     }
//     alert(totalvalues);
    
// }

// function teaMake(){
//     var tea ="";
//     alert("Congratulation You have Tea");
    
// }
// function milkTea(){
//     alert("Congratulation You have Milk Tea");
// }
// function paratha(){
//     alert("Congratulation You have Paratha");
// }
// function parathaWithTea(){
//     alert("Congratulation You have Paratha With Tea");
// }





// var num = 0;

// var a = prompt("enter your desire table number");

// function tableFunction(){
//     for(var i=1; i<=20; i++){ 
//        document.write( "<span>" + a + "</span>" + "*" +"<span>"+i+"</span>" + "=" + "<span>"+ a*i +"</span>"+ "<br/>");
//     }
// }

// function diamond( n ) 
// {
//     n = parseInt(n,20);

//     var i, s;

//     // top: 1 to n
//     document.write("<pre>");
//     for(i = 1; i <= n; i++ )
//     {
//         // write n-i spaces:
//         for ( s = 1; s <= n-i; s++ )
//         {
//             document.write(" ");
//         }
//         // then write i asterisk+space sets:
//         for ( s = 1; s <= i; s++ )
//         {
//             document.write(" *");
//         }
//         document.write("\n");
//     }
//     // bottom: n-1 down to 1
//     for(i = n-1; i >= 1; i-- )
//     {
//         // write n-i spaces:
//         for ( s = 1; s <= n-i; s++ )
//         {
//             document.write(" ");
//         }
//         // then write i asterisk+space sets:
//         for ( s = 1; s <= i; s++ )
//         {
//             document.write(" *");
//         }
//         document.write("\n");
//     }
// }

// diamond(20);

//  var num;
// function fibonacci(num){
//     var temp;
//     var p1 = 0;
//     var p2 = 1;
//     var num = prompt("Enter Number of terms",num);
    
//     for (var i = 0; i < num; i++){
//         if (i <= 1){
//             temp = i; 
//         }
//         else {
//             temp = p1 + p2;
//             p1 = p2;
//             p2 = temp;
//         }
//          document.write(temp + "</br>");
//     }
       
//     }

// fibonacci(num);

// Chapter 49:

function checkAddress(fieldId) {
     if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
}

// chapter 50:

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "9878" :
            cityName = "Salman using Sky";
            break;
        case "9508" :
            cityName = "SAIEN KHAPPY";
            break;
        case "10047" :
            cityName = "AHMED Qadri Attari Rizvi Ziai";
    }
    document.getElementById("city").value = cityName;
}

// Chapter 51:

function expandLoris() {
 var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
 document.getElementById("slowLoris").innerHTML = expandedParagraph;
}




