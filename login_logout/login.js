
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
	if (user === "") {
		$( "#login" ).click(function() {
			var user = $("#user").val();

			if ( user === "" ) {
				alert( "Please enter a user name." );
				$("#user").focus();
			} else {
				setCookie( "user", user, 5 );
				// go to login.html page
			   location = "login.html";
			}
		});
		$("#user").focus();
	} else {
		// go to login.html page
	    location = "login.html";
	}
});
