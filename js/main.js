const req = new XMLHttpRequest();

req.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  }
});

req.open(
  "get",
  "http://api.aladhan.com/v1/calendarByCity?city=ta'if%27if&country=sa&method=2&month=04&year=2017"
);
req.send();

// http://api.aladhan.com/v1/calendarByCity?city=London&country=United%20Kingdom&method=2&month=04&year=2017
