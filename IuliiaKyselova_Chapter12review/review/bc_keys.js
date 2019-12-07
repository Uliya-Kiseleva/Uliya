"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Iuliia Kyselova
   Date:11/21/2019   

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

//event listener for load event to run the findKeyWords and makeKeyStyles functions

//3
window.addEventListener("load", findKeyWords);

window.addEventListener("load", makeKeyStyles);

//4
function findKeyWords() {
    //5
    var keyWordBox = document.createElement("aside");
    keyWordBox.setAttribute('id', 'keywords');

    var keyWordTitle = document.createElement("h1");

    //keyWordList.innerHTML = keyWordTitle[i];
    keyWordTitle.innerHTML = "Keyword List";

    keyWordBox.appendChild(keyWordTitle);


    //6
    var keyWordList = document.createElement("ol");
    keyWordBox.appendChild(keyWordList);


    //7 
    var keyWordElems = document.querySelectorAll("article#doc dfn");

    var keyWords = new Array(keyWordElems.length);



    for (var i = 0; i < keyWordElems.length; i++) {
        keyWords[i] = keyWordElems[i].textContent;

        var linkID = replaceWS(keyWords[i]);

        linkID = "keywords_" + linkID;

        keyWordElems[i].setAttribute('id', linkID);
    }
    //8
    keyWords.sort();




    //9

    for (var i = 0; i < keyWords.length; i++) {
        var keyWordListItem = document.createElement("li");
        var keyWordLink = document.createElement("a");
        keyWordLink.innerHTML = keyWords[i];
        var linkID = replaceWS(keyWords[i]);
        linkID = "#" + "keyword_" + linkID;

        keyWordLink.setAttribute("href", linkID);
        keyWordListItem.appendChild(keyWordLink);
        keyWordList.appendChild(keyWordListItem);
    }

    var historyDoc = document.getElementById('doc');
    historyDoc.insertBefore(keyWordBox, historyDoc.childNodes[0]);


}

function makeKeyStyles() {
    var keyStyles = document.createElement("style");
    document.head.appendChild(keyStyles);

    document.styleSheets[document.styleSheets.length - 1].insertRule("aside#keywords { \
            border: 3px solid rgb(101, 101, 101); \
            float: right; \
            margin: 20px 0px 20px 20px; \
            padding: 10px; \
            width: 320px; \
        }", 0);

    document.styleSheets[document.styleSheets.length - 1].insertRule("aside#keywords h1 { \
            font-size: 2em; \
            margin: 5px; \
            text-align: center; \
        }", 1);

    document.styleSheets[document.styleSheets.length - 1].insertRule("aside#keywords ol { \
            font-size: 20px; \
            font-size: 1.2em; \
        }", 2);

    document.styleSheets[document.styleSheets.length - 1].insertRule("aside#keywords ol li { \
            line-height: 1.5em; \
        }", 3);

    document.styleSheets[document.styleSheets.length - 1].insertRule("aside#keywords ol li a { \
            color: rgb(101, 101, 101); \
            text-decoration: none; \
        }", 4);
}




/* Supplied Functions */

function replaceWS(textStr) {
    var revText = textStr.replace(/\s+/g, "_");
    return revText;
}