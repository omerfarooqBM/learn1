//Q:1

function positive(){
    var num = document.getElementById('pos').value;
    var res = Math.round(num);
    var res1 = Math.floor(num)
    var res2 = Math.ceil(num)
    
    document.getElementById('l1').innerHTML=num;
    document.getElementById('l2').innerHTML=res;
    document.getElementById('l3').innerHTML=res1;
    document.getElementById('l4').innerHTML=res2;
    num = document.getElementById('pos').value='';    
}

//Q:2

function negative(){
    var num = document.getElementById('neg').value;
    var res = Math.round(num);
    var res1 = Math.floor(num)
    var res2 = Math.ceil(num)
    
    document.getElementById('l11').innerHTML=num;
    document.getElementById('l22').innerHTML=res;
    document.getElementById('l33').innerHTML=res1;
    document.getElementById('l44').innerHTML=res2;
    num = document.getElementById('neg').value='';    
}

//Q:3

function floating(){
    var num = document.getElementById('float').value;
    var res = Math.round(num);
    var res1 = Math.floor(num)
    var res2 = Math.ceil(num)
    
    document.getElementById('l111').innerHTML=num;
    document.getElementById('l222').innerHTML=res;
    document.getElementById('l333').innerHTML=res1;
    document.getElementById('l444').innerHTML=res2;
    num = document.getElementById('float').value='';    
}

//Q:4

function negFloating(){
    var num = document.getElementById('negFloat').value;
    var res = Math.round(num);
    var res1 = Math.floor(num)
    var res2 = Math.ceil(num)
    
    document.getElementById('l1111').innerHTML=num;
    document.getElementById('l2222').innerHTML=res;
    document.getElementById('l3333').innerHTML=res1;
    document.getElementById('l4444').innerHTML=res2;
    num = document.getElementById('negFloat').value='';    
}

//Q:5

function absolute(){
    var num = document.getElementById('abs').value;
    var res = Math.abs(num);
    
    document.getElementById('absolute1').innerHTML=num;
    document.getElementById('absolute2').innerHTML=res;
    num = document.getElementById('abs').value='';    
}

//Q:6
function dice(){
    var value = Math.random();
    value = Math.round(value * 6);
    if(value === 0 ){
        value = 1;
        document.getElementById('dice1').innerHTML= value;
    }else{
        document.getElementById('dice1').innerHTML= value;
    }
    // console.log(value);    
}

//Q:6
function dice1(){
    var value = Math.random();
    value = Math.round(value * 6);
    if(value === 0 ){
        value = 1;
        document.getElementById('dice2').innerHTML= value;
    }else{
        document.getElementById('dice2').innerHTML= value;
    }
    // console.log(value);    
}