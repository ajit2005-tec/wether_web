const apiKey = "3e85fe7c36cfad7c1a870d7f0e6d2cb8";
const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const img = document.querySelector(".img");

async function wetherData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiurl);
    let data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "⁰c";
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed;
    let weth = data.weather[0].main;
    if (weth === "Clouds") {
        img.src = "/images/cloudy.png";
    } else if (weth === "Rain") {
        img.src = "/images/rainy-day.png";
    } else {
        img.src = "/images/sun.png";
    }
}

wetherData("New York");

button.addEventListener("click", () => {
    const city = input.value.trim();
    if (city !== "") {
        wetherData(city);
    } else {
        showCustomAlert("Please enter a city name!");
    }
});

function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    alertBox.querySelector("p").textContent = message;
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);
}
