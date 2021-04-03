//Use Jquery UI Selection
//Use Jquery UI Button
//Use moment.js
$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));   

    $(".saveBtn").on("click", function(){
        console.log(this);
        var textBox = $(this).siblings(".userInputText").val();
        var timeBox =$(this).parent().attr("id");

        localStorage.setItem(timeBox, textBox);
    })

//load the stored data
$("#hour1 .userInputText").val(localStorage.getItem("hour1"));
$("#hour2 .userInputText").val(localStorage.getItem("hour2"));
$("#hour3 .userInputText").val(localStorage.getItem("hour3"));
$("#hour4 .userInputText").val(localStorage.getItem("hour4"));
$("#hour5 .userInputText").val(localStorage.getItem("hour5"));
$("#hour6 .userInputText").val(localStorage.getItem("hour6"));
$("#hour7 .userInputText").val(localStorage.getItem("hour7"));
$("#hour8 .userInputText").val(localStorage.getItem("hour8"));
$("#hour9 .userInputText").val(localStorage.getItem("hour9"));
$("#hour10 .userInputText").val(localStorage.getItem("hour10"));
$("#hour11 .userInputText").val(localStorage.getItem("hour11"));
$("#hour12 .userInputText").val(localStorage.getItem("hour12"));
$("#hour13 .userInputText").val(localStorage.getItem("hour13"));
$("#hour14 .userInputText").val(localStorage.getItem("hour14"));
$("#hour15 .userInputText").val(localStorage.getItem("hour15"));
$("#hour16 .userInputText").val(localStorage.getItem("hour16"));
$("#hour17 .userInputText").val(localStorage.getItem("hour17"));
$("#hour18 .userInputText").val(localStorage.getItem("hour18"));
$("#hour19 .userInputText").val(localStorage.getItem("hour19"));
$("#hour20 .userInputText").val(localStorage.getItem("hour20"));
$("#hour21 .userInputText").val(localStorage.getItem("hour21"));

//Track the current time to assign the right color
function timeTrack(){
    var hourMoment = moment().hour();

    $(".time-block").each(function(){
        var pastHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(pastHour, hourMoment)

        if(pastHour < hourMoment){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else if (pastHour === hourMoment) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
}
timeTrack();
});
