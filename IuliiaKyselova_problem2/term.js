"use strict";



function cel() 
{
  var cel = Number(document.getElementById("num2").value);
  var far = cel * (9/5) + 32;
   document.getElementById("num1").value = far;
}
function far() 
{
  var far = Number(document.getElementById("num1").value);
  var cel = (far - 32) * 5/9;
   document.getElementById("num2").value = cel;
}

function reset(){  
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}