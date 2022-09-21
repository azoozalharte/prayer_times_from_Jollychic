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
    console.log(getTodayPrayers[0].timings.Fajr.split(" ")[0]);
    // card header and content
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const cityName = document.createElement("p");
    cityName.classList.add("city-name");
    cityName.innerHTML = "Jeddah";
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

    // fajr Prayer Card
    const fajrPrayerCard = document.createElement("div");
    fajrPrayerCard.classList.add("prayer-card");

    // صلاة الفجر
    const fajrPrayer = document.createElement("p");
    fajrPrayer.classList.add("prayer-content");
    fajrPrayer.innerHTML = `الفجر ${
      getTodayPrayers[0].timings.Fajr.split(" ")[0]
    } `;
    fajrPrayerCard.appendChild(fajrPrayer);

    // Dhuhr Prayer Card
    const dhuhrPrayerCard = document.createElement("div");
    dhuhrPrayerCard.classList.add("prayer-card");
    dhuhrPrayerCard.classList.add("prayer-card");

    // صلاة الظهر
    const dhuhrPrayer = document.createElement("p");
    dhuhrPrayer.classList.add("prayer-content");
    dhuhrPrayer.innerHTML = `الظهر ${
      getTodayPrayers[0].timings.Dhuhr.split(" ")[0]
    } `;
    dhuhrPrayerCard.appendChild(dhuhrPrayer);

    // Asr Prayer Card
    const asrPrayerCard = document.createElement("div");
    asrPrayerCard.classList.add("prayer-card");
    asrPrayerCard.classList.add("prayer-card");

    // صلاة العضر
    const asrPrayer = document.createElement("p");
    asrPrayer.classList.add("prayer-content");
    asrPrayer.innerHTML = `العصر ${
      getTodayPrayers[0].timings.Asr.split(" ")[0]
    } `;
    asrPrayerCard.appendChild(asrPrayer);

    // Maghrib Prayer Card
    const maghribPrayerCard = document.createElement("div");
    maghribPrayerCard.classList.add("prayer-card");
    maghribPrayerCard.classList.add("prayer-card");

    // صلاة المفرب
    const maghribPrayer = document.createElement("p");
    maghribPrayer.classList.add("prayer-content");
    maghribPrayer.innerHTML = `المغرب ${
      getTodayPrayers[0].timings.Maghrib.split(" ")[0]
    } `;
    maghribPrayerCard.appendChild(maghribPrayer);

    // Maghrib Prayer Card
    const ishaPrayerCard = document.createElement("div");
    ishaPrayerCard.classList.add("prayer-card");
    ishaPrayerCard.classList.add("prayer-card");

    // صلاة المفرب
    const ishaPrayer = document.createElement("p");
    ishaPrayer.classList.add("prayer-content");
    ishaPrayer.innerHTML = `العشاء ${
      getTodayPrayers[0].timings.Isha.split(" ")[0]
    } `;
    ishaPrayerCard.appendChild(ishaPrayer);

    console.log();
    document.querySelector(".card").appendChild(cardHeader);
    document.querySelector(".card").appendChild(fajrPrayerCard);
    document.querySelector(".card").appendChild(dhuhrPrayerCard);
    document.querySelector(".card").appendChild(asrPrayerCard);
    document.querySelector(".card").appendChild(maghribPrayerCard);
    document.querySelector(".card").appendChild(ishaPrayerCard);
  }
});
req.open(
  "get",
  `http://api.aladhan.com/v1/calendarByCity?city=ta'if%27if&country=sa&method=${date.date()}&month=${date.month()}&year=${date.year()}`
);
req.send();

document.querySelector("#search").addEventListener("submit", (e) => {
  e.preventDefault();
  const cityData1 = getCitieNmae(e.target.name.value);
  console.log(cityData1);
  // req.open(
  //   "get",
  //   `http://api.aladhan.com/v1/calendarByCity?city=ta'if%27if&country=sa&method=${date.date()}&month=${date.month()}&year=${date.year()}`
  // );
  // req.send();
});

// http://api.aladhan.com/v1/calendarByCity?city=London&country=United%20Kingdom&method=2&month=04&year=2017
