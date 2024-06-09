const apiKey = "6b27be7b4c7259d26997c8232c7ca418"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
async function checkWeather() {
    let inputValue = document.getElementById("input");
    let value = inputValue.value;
    if (!inputValue.value) {
        alert("Please enter a valid City or Town name");
    }

    const response = await fetch(apiUrl + `${value}` + `&units=metric` + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    if (data.cod == 400) {
        alert(data.message);
    } else if (data.cod == 401) {
        alert(data.message);
    } else if (data.cod == 404) {
    alert(data.message);
    } else if (data.cod == 429) {
        alert(data.message);
    }

    document.getElementById("country").innerHTML = 'Country code: ' + data.sys.country;
    document.getElementById("city").innerHTML = 'City/Town: ' + data.name;
    document.getElementById("temp").innerHTML = 'Temperature: ' + data.main.temp + ' °C';
    document.getElementById("humidity").innerHTML = 'Humidity: ' + data.main.humidity + ' %';
    document.getElementById("pressure").innerHTML = 'Air pressure: ' + data.main.pressure + ' hPa';
    document.getElementById("cloud-percent").innerHTML = 'Cloud coverage: ' + data.clouds.all + ' %';
    document.getElementById("cloud-description").innerHTML = 'Description: ' + data.weather[0].description;
}
