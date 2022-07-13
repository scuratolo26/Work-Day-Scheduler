var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var currentDayEl = document.querySelector("#currentDay");

today = mm + '/' + dd + '/' + yyyy;

currentDayEl.textContent = today;