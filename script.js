let date = document.getElementById("date-time-container");

setInterval(() => {
let currentDay = new Date();
date.innerHTML = currentDay.toUTCString()
},1000);