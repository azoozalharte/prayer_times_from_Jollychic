const reqCities = new XMLHttpRequest();
reqCities.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const cities = JSON.parse(e.target.responseText);
    // console.log(cities);
  }
});
reqCities.open(
  "get",
  "http://raw.githubusercontent.com/homaily/Saudi-Arabia-Regions-Cities-and-Districts/master/json/cities.json"
);
reqCities.send();

// console.log(reqCities);
