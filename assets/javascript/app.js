//Variables
    //Timer variablles
    var intervalId;
    var time = 30;
    var timerRunning = false;
    //Result variables
    var correct = 0,
        incorrect = 0,
        unanswered = 0;

$(document).ready(function() {
    $("#start").click( function() {
        $("#start").addClass("hide");
        $("#timer").removeClass("hide");
        $("#questions").removeClass("hide");
    });
});

//Functions
    function newGame() {
        time = 30;
        timerRunning = false;

        correct = incorrect = unanswered = 0;
    }

    function timer() {
        timerRunning = true;

        clearInterval(intervalId);
        intervalId = setInterval(countTime, 1000)
    }

    function countTime() {
        time--;

        $("#time").text(time);
    }

    function printResult() {

    }