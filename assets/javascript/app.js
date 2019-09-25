//Variables
    //Timer variablles
    var intervalId;
    var time = 30;
    //Result variables
    var textResult = "Time is Up!";
    var correct = 0,
        incorrect = 0,
        unanswered = 0;
    //question variables
    var countQuestion = 0,
        answered = 0;

$(document).ready(function() {
    $("#start").click( function() {
        $("#start").addClass("hide");
        $("#timer").removeClass("hide");
        $("#questions").removeClass("hide");

        timer();
    });

    $("form button").click( function() {
        console.log("submitting form");

        //submit form & prevent page refresh
        $("form").submit(function(e) {
            e.preventDefault();
            // https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
        });

        textResult = "Submitted!";

        checkAnswers();
    });
});

//Functions
    function newGame() {
        console.log("New Game");
        time = 30;

        textResult = "Time is Up!";

        correct = incorrect = unanswered = 0;

        //hiding everything again
        $("#timer").addClass("hide");
        $("#questions").addClass("hide");
        $("#results").addClass("hide");

        //reset form
        $("form").reset();

        //display start
        $("#start").removeClass("hide");
    }

    function timer() {
        console.log("Timer is running");

        clearInterval(intervalId);
        intervalId = setInterval(countTime, 1000)
    }

    function countTime() {
        console.log("Counting time")

        time--;

        $("#time").text(time);

        if(time <= 0) {
            checkAnswers();
        }
    }

    function stopTime() {
        console.log("stopping timer");

        clearInterval(intervalId);
    }

    function printResult() {
        console.log("printing results");

        $("#results h2").text(textResult);

        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);

        $("#results").removeClass("hide");
    }

    function checkAnswers() {
        stopTime();

        //Hide stuff
        $("#questions").addClass("hide");

        console.log("checking answers");

        //check the numbers of questions in the form
        countQuestion = $("#questions fieldset").length;
        console.log("Total questions: " + countQuestion);

        //check the number of answered questions
        answered = $(":radio:checked").length;
        console.log("Questions answered: " + answered);

        //determine number of unanswered questions
        unanswered = countQuestion - answered;
        console.log("Questions unanswered: " + unanswered);

        //determine number of correct answers
        correct = $(":radio[value='correct']:checked").length;
        console.log("Questions correct: " + correct);

        //determine number of incorrect answers
        incorrect = $(":radio[value='incorrect']:checked").length;
        console.log("Questions incorrect: " + incorrect);

        printResult();

        //printResult();
    }