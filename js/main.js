"use strict";
moment.locale();
const req = new XMLHttpRequest();
// get today date
const date = moment();
req.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    // console.log(e.target);
    const data = JSON.parse(e.target.responseText);
    const getTodayPrayers = data.data.filter(
      (prayer) => prayer.date.readable.split(" ")[0] === date.date().toString()
    );
    console.log(getTodayPrayers);
    // card header and content
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const cityName = document.createElement("p");
    cityName.classList.add("city-name");
    cityName.innerHTML = "أوقات الصلاة في مدينة جدة";
    cardHeader.appendChild(cityName);

    const cityTime = document.createElement("p");
    cityTime.classList.add("time");
    cityTime.innerHTML = date.format("LT").includes("AM")
      ? date.format("LT").replace("AM", "")
      : date.format("LT").replace("PM", "");
    cardHeader.appendChild(cityTime);

    const uiDate = document.createElement("p");
    uiDate.classList.add("ui-date");
    uiDate.innerHTML = `${date.year()}/${date.month() + 1}/${date.date()}`;
    cardHeader.appendChild(uiDate);
    // prayer card

    document.querySelector(".card").appendChild(cardHeader);
  }
});
req.open(
  "get",
  `http://api.aladhan.com/v1/calendarByCity?city=ta'if%27if&country=sa&method=${date.date()}&month=${date.month()}&year=${date.year()}`
);
req.send();

// http://api.aladhan.com/v1/calendarByCity?city=London&country=United%20Kingdom&method=2&month=04&year=2017
