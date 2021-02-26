
function currentDate() {
    var dates = new Date();
    var hr = dates.getHours();
    var mint = dates.getMinutes();
    var sec = dates.getSeconds();
    var date = dates.getDate();
    var month = dates.getMonth();
    var year = dates.getFullYear()

    document.getElementById('datesMint').innerHTML = mint + " :";
    document.getElementById('datesHr').innerHTML = hr + " :";
    document.getElementById('datesSec').innerHTML = sec;
    document.getElementById('datesDate').innerHTML = date + ' -';
    document.getElementById('datesMonth').innerHTML = month + ' -';
    document.getElementById('datesYear').innerHTML = year;
}

function userFullName() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var fullname = fName + ' ' + lName;

    document.getElementById('fullname').innerHTML = "Welcome " + fullname;
}


function AddTwoNUmbers() {
    var fnumber = document.getElementById('1st').value;
    var lnumber = document.getElementById('2nd').value;
    var add = parseInt(fnumber) + parseInt(lnumber);

    document.getElementById('Adds').innerHTML = add;
}

function Culcution() {
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    first = parseInt(first);
    second = parseInt(second)
    var oper = document.getElementById('oper').value;
    if (oper === "+") {
        document.getElementById("res").innerHTML = first + second;
    }
    else if (oper === "-") {
        document.getElementById("res").innerHTML = first - second;
    }
    else if (oper === "*") {
        document.getElementById("res").innerHTML = first * second;
    }
    else if (oper === "/") {
        document.getElementById("res").innerHTML = first / second;
    }
    else if (oper === "%") {
        document.getElementById("res").innerHTML = first % second;
    }
    else {
        document.getElementById("res").innerHTML = "Please Write These Operator + , - , * , / , % ";
    }
}


function square() {
    var first = document.getElementById('num').value;
    var square = first * first;
    document.getElementById('squ').innerHTML = square;
}

function numbers() {
    var min = document.getElementById('num1').value;
    var max = document.getElementById('num2').value;

    for (var i = min; i <= max; i++) {
        // console.log('your number',i)
        document.getElementById('count').innerHTML += 'your number ' + i + "<br/>";
    }
}

function bigValue() {
    var value1 = document.getElementById('num11').value;
    var value2 = document.getElementById('num12').value;

    var bigValue = Math.max(value1, value2);
    // console.log(bigValue);
    document.getElementById('bigNum').innerHTML = "Your Maximum value is: " + bigValue;
}

function rectangale() {
    var width = document.getElementById('num13').value;
    var height = document.getElementById('num14').value;

    var total = width * height;

    document.getElementById('rectangle').innerHTML = total;
}


function sort() {
    var value1 = parseInt(document.getElementById('num15').value);
    var value2 = parseInt(document.getElementById('num16').value);
    var value3 = parseInt(document.getElementById('num17').value);
    var array = []
    array.push(value1, value2, value3);
    // console.log(array)
    document.getElementById('notSorted').innerHTML = "Without Sorting " + array;
    let newArray = array.sort();
    console.log(newArray)
    document.getElementById('sorted').innerHTML = "With Sorting " + array;
}


let numberArray = [];
function sumOfArrayData() {
    var value1 = parseInt(document.getElementById('num18').value);
    numberArray.push(value1);

    function getSum(total, num) {
        return total + num;
    }
    var sumOfArray = numberArray.reduce(getSum);
    
    document.getElementById('sumOfArray').innerHTML = "Your Created Array: "+"["+numberArray+"]";
    document.getElementById('sumOfArray2').innerHTML = "After Sum :" +sumOfArray;

}

function exicute() {
    var param = function inner() {
        return typeof inner;
    }
    alert(param());
}


function powers() {
    // console.log('powers', powers);

    var num = parseInt(document.getElementById('num19').value);
    var exponent = parseInt(document.getElementById('num20').value);
    var answered = 1;
    // console.log('value1', num);
    console.log('exponent', exponent);
    for (var i = 0; i < exponent; i++) {
        answered = answered * num;
    }
    document.getElementById('powerResult').innerHTML = answered;
}   

function dice(){
    var value = Math.random();
    value = Math.round(value * 1);
    console.log(value);
    if(value === 0 ){
        document.getElementById('dice2').innerHTML= "Head";
    }else{
        document.getElementById('dice2').innerHTML= 'Tail';
    }
}

function reverce(){
    var num = document.getElementById('num21').value;
    // console.log(num)
    var reverse = num.split("").reverse().join("");
    var aa = Number(reverse);
    // console.log(aa)
    document.getElementById('revers').innerHTML= aa;
    
}
