async function getWeather() {
  const city = "Lucknow";
  const key = "14673b9f7bf44c7ab0813017261406";
  const url = `https://api.weatherapi.com/v1/current.json?key=14673b9f7bf44c7ab0813017261406&q=${city}&aqi=no`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.getElementById("city1").innerHTML = city + ","+data.location.country;
  document.getElementById("temp_c").innerHTML = data.current.temp_c;
  document.getElementById("humidity").innerHTML = data.current.humidity;
  document.getElementById("wind_kph").innerHTML = data.current.wind_kph;
  document.getElementById("feelslike_c").innerHTML = data.current.feelslike_c;
  document.getElementById("text").innerHTML = data.current.condition.text;
  document.getElementById("icon").src = data.current.condition.icon;

}


async function getWeather1() {

  const city = document.getElementById("city_name").value;
  const key = "14673b9f7bf44c7ab0813017261406";
  const url = `https://api.weatherapi.com/v1/current.json?key=14673b9f7bf44c7ab0813017261406&q=${city}&aqi=no`;
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("city1").innerHTML = city +","+ data.location.country;
  document.getElementById("temp_c").innerHTML = data.current.temp_c;
  document.getElementById("humidity").innerHTML = data.current.humidity;
  document.getElementById("wind_kph").innerHTML = data.current.wind_kph;
  document.getElementById("feelslike_c").innerHTML = data.current.feelslike_c;
  document.getElementById("text").innerHTML = data.current.condition.text;
  document.getElementById("icon").src = data.current.condition.icon;
  
}
