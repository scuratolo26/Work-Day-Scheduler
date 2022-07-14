$(document).ready(function () {
    load();
});

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
var checkCurrentTime = function () {

    var timeNow = moment().format('HH');
    var timeBlocks = $(".textArea");

    for (var i = 0; i < timeBlocks.length; i++) {

        var getElementID = timeBlocks[i].id;

        var changeID = document.getElementById(timeBlocks[i].id)

        $(timeBlocks[i].id).removeClass(".present .past .future");

        if (getElementID < timeNow) {
            $(changeID).addClass("past");
        } else if (getElementID > timeNow) {
            $(changeID).addClass("future");
        } else {
            $(changeID).addClass("present");
        }
    }
}

setInterval(checkCurrentTime(), (1000 * 60) * 5);

// END CHECK TIME 

// SAVE TASKS

function save(id, data) {
    localStorage.setItem(id, data);
};

function load() {
    var ids = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    $.each(ids, function (k, v) {
        var temp = localStorage.getItem(v);
        $('#' + v).val(temp);
    });
};

// DELETE ALL EVENTS
function del() {
    localStorage.clear();
    location.reload();
};