// DISPLAY CURRENT DATE
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var currentDayEl = document.querySelector("#currentDay");
var now = moment().format('LT');
today = mm + '/' + dd + '/' + yyyy;

currentDayEl.textContent = today;
// END DISPLAY CURRENT DATE

// CHECK TIME AND SET BACKGROUND COLOR
var checkTime = function () {

    var currentTime = moment().format('HH');
    var timeBlocks = $(".textArea");

    for (var i = 0; i < timeBlocks.length; i++) {

        var getElementID = timeBlocks[i].id;

        var changeID = document.getElementById(timeBlocks[i].id)

        $(timeBlocks[i].id).removeClass(".present .past .future");

        if (getElementID < currentTime) {
            $(changeID).addClass("past");
        } else if (getElementID > currentTime) {
            $(changeID).addClass("future");
        } else {
            $(changeID).addClass("present");
        }
    }
}

setInterval(checkTime(), (1000 * 60) * 5);

// END CHECK TIME 