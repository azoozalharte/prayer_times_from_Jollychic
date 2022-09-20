"use strict";
const req = new XMLHttpRequest();
// get today date
const date = moment();

req.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    const getTodayPrayers = data.data.filter(
      (prayer) => prayer.date.readable.split(" ")[0] === date.date().toString()
    );
    console.log(getTodayPrayers);
  }
});
req.open(
  "get",
  `http://api.aladhan.com/v1/calendarByCity?city=ta'if%27if&country=sa&method=${date.date()}&month=${date.month()}&year=${date.year()}`
);
req.send();

// http://api.aladhan.com/v1/calendarByCity?city=London&country=United%20Kingdom&method=2&month=04&year=2017
