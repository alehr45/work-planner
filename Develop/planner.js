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

    //Stores user data in localStorage
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



    if (moment().format("HH") == $(nineAmElement).attr("data-time"))
        $(nineAmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(nineAmElement).attr("data-time"))
        $(nineAmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(nineAmElement).attr("data-time"))
        $(nineAmElement).css("backgroundColor", "green");

    if (moment().format("HH") == $(tenAmElement).attr("data-time"))
        $(tenAmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(tenAmElement).attr("data-time"))
        $(tenAmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(tenAmElement).attr("data-time"))
        $(tenAmElement).css("backgroundColor", "green");

    if (moment().format("HH") == $(elevenAmElement).attr("data-time"))
        $(elevenAmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(elevenAmElement).attr("data-time"))
        $(elevenAmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(elevenAmElement).attr("data-time"))
        $(elevenAmElement).css("backgroundColor", "green");

    if (moment().format("HH") == $(twelvePmElement).attr("data-time"))
        $(twelvePmElementt).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(twelvePmElement).attr("data-time"))
        $(twelvePmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(twelvePmElement).attr("data-time"))
        $(twelvePmElement).css("backgroundColor", "green");


    if (moment().format("HH") == $(onePmElement).attr("data-time"))
        $(onePmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(onePmElement).attr("data-time"))
        $(onePmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(onePmElement).attr("data-time"))
        $(onePmElement).css("backgroundColor", "green");

    if (moment().format("HH") == $(twoPmElement).attr("data-time"))
        $(twoPmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(twoPmElement).attr("data-time"))
        $(twoPmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(twoPmElement).attr("data-time"))
        $(twoPmElement).css("backgroundColor", "green");


    if (moment().format("HH") == $(threePmElement).attr("data-time"))
        $(threePmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(threePmElement).attr("data-time"))
        $(threePmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(threePmElement).attr("data-time"))
        $(threePmElement).css("backgroundColor", "green");

        if (moment().format("HH") == $(fourPmElement).attr("data-time"))
        $(fourPmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(fourPmElement).attr("data-time"))
        $(fourPmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(fourPmElement).attr("data-time"))
        $(fourPmElement).css("backgroundColor", "green");

        if (moment().format("HH") == $(fivePmElement).attr("data-time"))
        $(fivePmElement).css("backgroundColor", "yellow");
    else if (moment().format("HH") > $(fivePmElement).attr("data-time"))
        $(fivePmElement).css("backgroundColor", "red");
    else if (moment().format("HH") < $(fivePmElement).attr("data-time"))
        $(fivePmElement).css("backgroundColor", "green");
};

