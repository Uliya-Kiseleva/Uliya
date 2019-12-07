"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Iuliia Kyselova
   Date:  11/12/2019 
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0;
var cartHTML = "<table>" +
 "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th>" + "<th>Total</th></tr>";

// For loop, body of the cart table
for (var i=0;i<item.length;i++){
// Display the cart items and their info
cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td><td>" + itemDescription[i] + "</td><td>$" + itemPrice[1] + "</td><td>" + itemQty[i] + "</td>";
    
// calculate the item and total costs
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "<td></tr>";
    orderTotal += itemCost;
    

}
//complete the table the order total
cartHTML += "<tr>" +
            "<td colspan = '4'>Subtotal</td>" +
            "<td>$" + orderTotal + "</td>" +
            "</tr>" +
            "</table>";
document.getElementById("cart").innerHTML = cartHTML;