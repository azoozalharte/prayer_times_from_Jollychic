"use strict";
const req = new XMLHttpRequest();
// get today date
const date = moment().format();
console.log(data);
// req.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4) {
//     const data = JSON.parse(e.target.responseText);
//     const todayPrayer = data.filter(prayer => prayer.)
//   }
// });

// req.open(
//   "get",
//   `http://api.aladhan.com/v1/calendarByCity?city=ta'if%27if&country=sa&method=${date.getDate}&month=${date.getMonth}&year=${date.getFullYear}`
// );
// req.send();

// http://api.aladhan.com/v1/calendarByCity?city=London&country=United%20Kingdom&method=2&month=04&year=2017
