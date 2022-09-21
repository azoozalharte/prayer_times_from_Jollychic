"use strict";

moment.locale();

const date = moment();
let city = "jeddah";

async function fetchData() {
  const req = await fetch(
    `http://api.aladhan.com/v1/calendarByCity?city=${city}%27if&country=sa&method=${date.date()}&month=${date.month()}&year=${date.year()}`
  );

  if (req.status === 200) {
    const data = await req.json();
    const getTodayPrayers = data.data.filter(
      (prayer) => prayer.date.readable.split(" ")[0] === date.date().toString()
    );

    return getTodayPrayers;
  }
}
document.querySelector("#search").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target.name.value);
  city = e.target.name.value;
  const result = await fetchData();
  domGenerator(result, city);
});

fetchData();
// http://api.aladhan.com/v1/calendarByCity?city=London&country=United%20Kingdom&method=2&month=04&year=2017
