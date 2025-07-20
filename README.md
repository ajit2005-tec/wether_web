<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

<h1>🌤️ Weather App</h1>

<p>A simple and beautiful weather app that shows the current temperature, weather condition, humidity, and wind speed of any city using the OpenWeatherMap API.</p>

<h2>📋 Features</h2>
<ul>
  <li>🔍 Search weather by city name</li>
  <li>🌡️ Displays temperature in Celsius</li>
  <li>🌤️ Weather icons (sunny, cloudy, rainy)</li>
  <li>💧 Shows humidity percentage</li>
  <li>🌬️ Shows wind speed in km/h</li>
  <li>⚠️ Custom alert for empty input</li>
</ul>

<h2>🧑‍💻 Author</h2>
<p><strong>Ajit Kumar Patra</strong></p>

<h2>📦 Technologies Used</h2>
<ul>
  <li><strong>HTML5</strong> – Structure</li>
  <li><strong>CSS3</strong> – Styling</li>
  <li><strong>JavaScript (ES6)</strong> – Functionality and API</li>
  <li><strong>OpenWeatherMap API</strong> – Weather data</li>
</ul>

<h2>🚀 Setup Instructions</h2>
<ol>
  <li>Clone the Repository:
    <pre><code>git clone https://github.com/yourusername/weather-app.git
cd weather-app</code></pre>
  </li>
  <li>Add Your API Key:
    <pre><code>// main.js
const apiKey = "YOUR_API_KEY_HERE";</code></pre>
  </li>
  <li>Run the App:  
    <p>Open <code>index.html</code> in your browser.</p>
  </li>
</ol>

<h2>🗂️ Folder Structure</h2>
<pre><code>weather-app/
├── index.html         # Main HTML file
├── style.css          # App styling
├── main.js            # JavaScript logic and API fetch
├── README.md          # Project documentation
└── images/            # Weather icons
    ├── sun.png
    ├── cloudy.png
    ├── rainy-day.png
    ├── humidity.png
    └── wind.png
</code></pre>

<h2>🌐 OpenWeatherMap API</h2>
<p>API Endpoint:</p>
<pre><code>https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}</code></pre>
<p>Register free: <a href="https://openweathermap.org/api" target="_blank">https://openweathermap.org/api</a></p>

<h2>🖼️ UI Design</h2>
<ul>
  <li>Search bar at top</li>
  <li>Weather icon, temperature, and city name</li>
  <li>Humidity and wind info</li>
  <li>Responsive card layout</li>
  <li>Custom alert for empty input</li>
</ul>

<h2>🧪 Sample Output</h2>
<pre><code>
City: New York
Temperature: 22°C
Humidity: 50%
Wind Speed: 30 km/h
Condition: Clear (☀️)
</code></pre>

<h2>🔮 Future Improvements</h2>
<ul>
  <li>🌍 Auto-detect location using geolocation</li>
  <li>🕒 Add multi-day forecast</li>
  <li>🌑 Add dark mode toggle</li>
  <li>🌐 Unit conversion between °C/°F and km/h/mph</li>
  <li>📈 Add loading animation</li>
</ul>

<h2>⚠️ Known Issues</h2>
<ul>
  <li>No error message for invalid city</li>
  <li>API key is exposed in frontend</li>
</ul>

<h2>📄 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>.</p>

<hr>
<p style="text-align:center;">💖 Made with love by <strong>Ajit Kumar Patra</strong></p>

</body>
</html>
