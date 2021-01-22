// Variables selecting user input fields and acquiring time from moment
var nineAmElement = document.querySelector("#user-input9");
var tenAmElement = document.querySelector("#user-input10");
var elevenAmElement = document.querySelector("#user-input11");
var twelvePmElement = document.querySelector("#user-input12");
var onePmElement = document.querySelector("#user-input1");
var twoPmElement = document.querySelector("#user-input2");
var threePmElement = document.querySelector("#user-input3");
var fourPmElement = document.querySelector("#user-input4");
var fivePmElement = document.querySelector("#user-input5");
var today = document.querySelector("#currentDay");
var momentElement = moment().format('LLLL');

//Shows current date and time live on the page
today.innerHTML = "Today is " + (momentElement);



