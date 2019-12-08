"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Iuliia Kyselova
   Date:  12/01.2019 
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener("load", function(){
    calcCart();
  
    
    document.getElementById('modelQty').onchange = calcCart;
    for(var i=0; i<document.querySelectorAll('#cart input[name=shipping]').length; i++){
        document.querySelectorAll('#cart input[name=shipping]')[i].addEventListener("click", calcCart);
    }  
});

function calcCart(){
    var modelCost = parseFloat(document.getElementById('modelCost').value).toFixed(2); 
    var dmodelQty = parseFloat(document.getElementById('modelQty').value).toFixed(2); 
    var orderCost = parseFloat(parseFloat(modelCost*dmodelQty).toFixed(2));
    document.getElementById('orderCost').value = formatUSCurrency(orderCost);
    
    var shipCost = parseFloat(parseFloat(document.querySelector('input[name="shipping"]:checked').value*dmodelQty).toFixed(2));
    document.getElementById('shippingCost').value = formatUSCurrency(shipCost);

    var subTotal = parseFloat(parseFloat(orderCost+shipCost).toFixed(2));
    document.getElementById('subTotal').value = formatUSCurrency(subTotal);
        
    var salesTax = parseFloat(parseFloat(0.05*subTotal).toFixed(2));
    document.getElementById('salesTax').value = formatUSCurrency(salesTax);
    
    var cartTotal = parseFloat(parseFloat(orderCost+shipCost+salesTax).toFixed(2));
    document.getElementById('cartTotal').value = formatUSCurrency(cartTotal);   
    
    document.getElementById('shippingType').value = document.querySelector('input[name="shipping"]:checked').parentNode.innerText;
};










function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
