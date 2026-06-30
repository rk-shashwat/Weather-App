const key = "14673b9f7bf44c7ab0813017261406";
async function getWeather(city = "Lucknow") {
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  const response = await fetch(url);
  if (!response.ok) 
  {
    alert(data.error?.message || "Unable to fetch weather");
    return;
  }
  const data = await response.json();
  console.log(data);
  document.getElementById("city1").innerHTML = city +","+data.location.country;
  document.getElementById("temp_c").innerHTML = data.current.temp_c;
  document.getElementById("humidity").innerHTML = data.current.humidity;
  document.getElementById("wind_kph").innerHTML = data.current.wind_kph;
  document.getElementById("feelslike_c").innerHTML = data.current.feelslike_c;
  document.getElementById("text").innerHTML = data.current.condition.text;
  document.getElementById("icon").src = data.current.condition.icon;

}