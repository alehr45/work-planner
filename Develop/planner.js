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


$(".save").on("click", function () {
    var nineElem = nineAmElement.value;
    var tenElem = tenAmElement.value;
    var elevenElem = elevenAmElement.value;
    var twelveElem = twelvePmElement.value;
    var oneElem = onePmElement.value;
    var twoElem = twoPmElement.value;
    var threeELem = threePmElement.value;
    var fourElem = fourPmElement.value;
    var fiveElem = fivePmElement.value;


    localStorage.setItem("9AM", JSON.stringify(nineElem));
    localStorage.setItem("10AM", JSON.stringify(tenElem));
    localStorage.setItem("11AM", JSON.stringify(elevenElem));
    localStorage.setItem("12PM", JSON.stringify(twelveElem));
    localStorage.setItem("1PM", JSON.stringify(oneElem));
    localStorage.setItem("2PM", JSON.stringify(twoElem));
    localStorage.setItem("3PM", JSON.stringify(threeELem));
    localStorage.setItem("4PM", JSON.stringify(fourElem));
    localStorage.setItem("5PM", JSON.stringify(fiveElem));
});

showUserText();

function showUserText() {
    var nineAM = JSON.parse(localStorage.getItem("9AM"));
    var tenAM = JSON.parse(localStorage.getItem("10AM"));
    var elevenAM = JSON.parse(localStorage.getItem("11AM"));
    var twelvePM = JSON.parse(localStorage.getItem("12PM"));
    var onePM = JSON.parse(localStorage.getItem("1PM"));
    var twoPM = JSON.parse(localStorage.getItem("2PM"));
    var threePM = JSON.parse(localStorage.getItem("3PM"));
    var fourPM = JSON.parse(localStorage.getItem("4PM"));
    var fivePM = JSON.parse(localStorage.getItem("5PM"));

    nineAmElement.value = nineAM;
    tenAmElement.value = tenAM;
    elevenAmElement.value = elevenAM;
    twelvePmElement.value = twelvePM;
    onePmElement.value = onePM;
    twoPmElement.value = twoPM;
    threePmElement.value = threePM;
    fourPmElement.value = fourPM;
    fivePmElement.value = fivePM;
};

