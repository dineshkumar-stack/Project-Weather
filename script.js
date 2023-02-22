let title = document.createElement("h1");
title.setAttribute("id", "title");
title.setAttribute("class", "text-center")
title.innerHTML = "REST COUNTRIES API";
document.head.append(title);
var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.classList.add("row", "m-3");
container.append(row);

try {
  async function weather() {
    var countries = await fetch("https://restcountries.com/v2/all");
    var Countrydata = await countries.json();
    Countrydata.filter(async (x) => {
      var weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x.name}&appid=15eca4ff9fb9f32f93e2e7a6b3785e3c`);
      var weatherData = await weatherAPI.json();
      //  console.log(weatherData);
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
      row.innerHTML += `
<div class="card text-center col-md-4">
<div class="card-header"><b>${x.name}</b></div>
<div class="card-body">
 <img src="${x.flag}" class="card-img-top" alt="...">                            
 <p class="card-text"><b>Capital:</b> ${x.capital}</p>         
 <p class="card-text"> <b>Region:</b> ${x.region}</p> 
 <p class="card-text"> <b>Country Code:</b> ${x.alpha2Code}</p>   
 <button type="button" class="btn btn-secondary" data-container="body" title="Weather:${weatherData.weather[0].description} " data-toggle="popover" data-placement="top"
  data-content="Temp: ${weatherData.main.temp} |
 Pressure: ${weatherData.main.pressure} |
 Humidity: ${weatherData.main.humidity}">
 Click for Weather
 </button>
</div>
</div>`;
      document.body.append(container);

    })
  }
  weather();
}
catch (x) {
  console.log("error");
}
