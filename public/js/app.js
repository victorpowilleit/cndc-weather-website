console.log("Client side javascript file is loaded!");
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const img1 = document.querySelector('#forecastImg')
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  msg1.textContent = msg2.textContent = img1.textContent = '';
  const location = search.value;
  msg1.textContent = 'Loading...';
  fetch("/weather?address=" + location).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        msg1.textContent = data.error;
      } else {
        msg1.textContent = data.LocationData;
        msg2.textContent = data.WeatherData;
        img1.innerHTML = "<img class=weatherImg src="+data.WeatherImg+">";
      }
    });
  });
});
