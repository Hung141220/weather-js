const ID = "5b59751c95c6ba18fd4056baf471bfab";
const DEFAULT_VALUE = "--";
const inputSearch = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind-speed");

inputSearch.addEventListener("change", (e) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${ID}&units=metric&lang=vi`
    )
        .then(async (response) => {
            const data = await response.json();
            return data;
        })
        .then((response) => {
            console.log(response);
            cityName.innerHTML = response.name || DEFAULT_VALUE;
            weatherState.innerHTML = response.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute(
                "src",
                `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
            ) || DEFAULT_VALUE;
            temperature.innerHTML = Math.round(response.main.temp)  || DEFAULT_VALUE;
            sunrise.innerHTML = moment.unix(response.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(response.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            humidity.innerHTML = response.main.humidity || DEFAULT_VALUE;
            wind.innerHTML = response.wind.speed || DEFAULT_VALUE;

        });
});
