"use strict";


//window.alert("Lets start");
function add(){
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
  document.getElementById("result").value = n1 + n2;
}

function sub(){
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
  document.getElementById("result").value = n1 - n2;       
}

function mul(){
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
  document.getElementById("result").value = n1 * n2;       
}

function div(){   
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
  document.getElementById("result").value = n1 / n2;       
}


function reset(){  
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("result").value = '';
}
