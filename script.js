//https://api.openweathermap.org/data/2.5/weather?q=nashik&appid=9ed558ce2335879c9b093fbc53557c5c&units=metric

let city_name = document.getElementById('city_name');
let celsius_btn = document.getElementById('celsius_unit');
let farenheit_btn = document.getElementById('farenheit_unit');
let check_btn = document.getElementById('check_btn');

let display_result = document.getElementById('result');
let display_city_country = document.getElementById('display_city_country');
let display_temperature = document.getElementById('temperature');
let display_description = document.getElementById('description');
let display_icon = document.getElementById('icon');

const api_key = "9ed558ce2335879c9b093fbc53557c5c";

check_btn.addEventListener('click', () => {
    getWeather(city_name.value);
});

async function getWeather(city) {

    try {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

        let response = await fetch(url);
        data = await response.json();

        current_temp = Number(data.main.temp).toFixed(2);

        icon_data = data.weather[0].icon;
        icon_url = `https://openweathermap.org/img/wn/${icon_data}@2x.png`;


        display_city_country.innerHTML = data.name + `, ` + data.sys.country;

        if (celsius_btn.addEventListener('click', () => {

            display_temperature.innerHTML = "Temperature: " + ` ${current_temp}` + '°C';
        }));

        if (farenheit_btn.addEventListener('click', () => {

            let return_farenheit = ((current_temp * 9 / 5) + 32).toFixed(2);

            display_temperature.innerHTML = "Temperature: " + ` ${return_farenheit}` + '°F';
        }));

        display_temperature.innerHTML = "Temperature: " + ` ${current_temp}` + '°C';
        display_description.innerHTML = data.weather[0].description;
        display_icon.innerHTML = `<img src="${icon_url}" alt="Weather icon">`;
        display_result.style.visibility = "visible";

    } catch (error) {
        console.log("ERROR:" + error);
    }

}