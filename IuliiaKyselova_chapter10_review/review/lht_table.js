"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Iuliia Kyselova
   Date:   11/11/2019
	
*/
var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'>" +
    "<caption>Upcoming Events</caption><tr><th>Date</th>" +
    "<th>Event</th><th>Price</th></tr>";
        
var endDate = new Date(thisDay.getTime()+14*24*60*60*1000);

// Loops through the eventDates array

for (var i=0;i<eventDates.length;i++){
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();
    
    if (thisDay <= eventDate && eventDate <= endDate){
        tableHTML = tableHTML + '<tr><td>' + eventDay + ' @ ' + eventTime + '</td><td>' + eventDescriptions[i] + '</td><td>' + eventPrices[i] + '</td></tr>'; 
    }  
}

tableHTML = tableHTML + '</table>';
document.getElementById('eventList').innerHTML = tableHTML;