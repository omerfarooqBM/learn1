var newArray=[];

window.onload= function(){
    document.getElementById("todoInput");
}
//     var images = document.createElement("span");
//     images.innerHTML="<i class='fa fa-trash-o' aria-hidden='true'></i>";
//     console.log(images);
//     listItem.setAttribute("image-id");
function addnewList(){
    var listItem = document.createElement("li");
    

    console.log(images);
    var inputValue = document.getElementById("todoInput").value;
    listItem.innerText = inputValue;
    newArray.push(listItem);
    if (inputValue == "" || inputValue == " " ){
        alert("Please Write Something..!");
    }
    else{
        var text = document.getElementById("todoList");
        text.appendChild(listItem);
    }   
}
var  newAction = document.getElementById("butn");
newAction.onclick = addnewList;

var remove = document.getElementById("remove");
remove.onclick = removeAll;

function removeAll(){
    if (newArray.length == 0){
        alert("Not have any List");
    }
    else
        document.getElementById("todoList").innerHTML="";
        newArray=[];
}

window.onload = function() {
  document.getElementById("todoInput").focus();
};