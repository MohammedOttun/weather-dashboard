document.querySelector('#search').addEventListener('click', getCity);

var API_KEY = '67373a6a293ed4384f10775c9f7663d8';
var lon;
var lat;
var city;

var searchHistory = []; // Search History array

var cardEl = document.getElementById('#featured-card');

// get city name
function getCity() { 
    cityInput = document.querySelector('#inputCity').value;
    city = cityInput;

    cacheSearchData();

    getCurrentWeather(city);
    getFiveDayWeather(city);
    getCurrentUVIndex(city);

 };

 function cacheSearchData() {
    searchHistory.push(city);
    console.log(searchHistory);
 }

function getCurrentWeather(city) {
    var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    
    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        
        //create day weather card
        var cardBodyEl = document.createElement('div');
        cardBodyEl.classList.add('card-body');

        var cardTitleEl = document.createElement('h4');
        cardTitleEl.classList.add('card-title');
        cardTitleEl.textContent = `${data.name}`;

        var cardTempEl = document.createElement('p');
        cardTempEl.classList.add('card-text');
        cardTempEl.textContent = `Temperature: ${data.main.temp}`;

        var cardHumEl = document.createElement('p');
        cardHumEl.classList.add('card-text');
        cardHumEl.textContent = `Humidity: ${data.main.humidity}`;

        cardEl.appendChild(cardBodyEl);
        cardBodyEl.appendChild(cardTitleEl);
        cardBodyEl.appendChild(cardTempEl);
        cardBodyEl.appendChild(cardHumEl);

        // Weather condition
        var icon = data.weather.icon; 

        // UV Index


            console.log("getCurrentWeather ↓");
            console.log(data);
        });
};


function getFiveDayWeather(city) {
    var endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`;

    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("getFiveDayWeather ↓");
            console.log(data);
        })
};

// Get city coordinates
function getCurrentUVIndex(city) {
    var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            lon = data.coord.lon;
            lat = data.coord.lat;

            // Get current UV Index
            var endpoint = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&exclude=daily,hourly,minutely,alerts&appid=${API_KEY}&units=imperial`
            
            fetch(endpoint)
            .then(function (response) {
                return response.json();
            })
            .then(function (UV_data) {

                // var cardUVIndexEl = document.createElement('p');
                // cardUVIndexEl.classList.add('card-text');
                // cardBodyEl.appendChild(cardUVIndexEl);
                // cardHumEl.textContent = `Humidity: ${data.main.humidity}`;
                
            console.log("getCurrentUVIndex ↓");
            console.log(data);
            })
        });
        
}


// -----------------------------------
// Search by city


// Get current and future conditions for that city 
    // Add city to the search history




// Get the current weather conditions for that city


// Show: city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index


// Show the UV index
    // show UV index condition with a color that indicates whether the conditions are favorable, moderate, or severe


// Show future weather conditions for that city
    // Show 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


// Click city in the search history
    // show current and future conditions for that city