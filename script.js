let title = document.createElement("h1");
title.setAttribute("id", "title");
title.setAttribute("class", "text-center")
title.innerHTML = "REST COUNTRIES API";
document.head.append(title);
var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.classList.add("row");
container.append(row);

try {
  async function weather() {
    var countries = await fetch("https://restcountries.com/v2/all");
    var Countrydata = await countries.json();
    Countrydata.filter(async (x) => {
      var weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x.name}&appid=15eca4ff9fb9f32f93e2e7a6b3785e3c`);
      var weatherData = await weatherAPI.json();
      //  console.log(Countrydata);
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
      console.log(Countrydata);

      row.innerHTML += `
<div class="card text-center col-sm-6 col-md-4 col-lg-4 col-xl-4">
<div class="card h-100">

<div class="card-header"><b>${x.name}</b></div>
<div class="card-body">
 <img src="${x.flag}" class="card-img-top" alt="...">  
 <div class="card-text">                     
 <p  <b>Capital:</b> ${x.capital}</p>         
 <p  <b>Region:</b> ${x.region}</p> 
 <p  <b>Country Code:</b> ${x.alpha2Code}</p> 
 </div> 
 <button type="button" class="btn btn-secondary" data-container="body" title="Weather:${weatherData.weather[0].description} " data-toggle="popover" data-placement="top"
  data-content="Temp: ${weatherData.main.temp} |
 Pressure: ${weatherData.main.pressure} |
 Humidity: ${weatherData.main.humidity}">
 Weather
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
