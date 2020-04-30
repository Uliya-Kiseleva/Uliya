
/*
Iuliia Kyselova
iuliiakyselova@my.smccd.edu
CIS 114 OL
Login
Assignment 6
Date 04/28/2020 
*/

"use strict";
$(document).ready(function(){
	var user = getCookieByName( "user" );
	$("#name").text( user );

	$( "#logout" ).click(function() {
		deleteCookie( "user" );
		// go to initial page
        location = "index.html";
	});
	
	$( "#logout" ).focus();
});