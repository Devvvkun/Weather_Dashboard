const submit = document.getElementById("submit");
const location = document.getElementById("location");
const api_key = "acd8e480b2174f6b83565416251112";
const searchScreen = document.getElementById('searchScreen');
      const weatherScreen = document.getElementById('weatherScreen');
      const cityInput = document.getElementById('cityInput');
      const submitBtn = document.getElementById('submitBtn');
      const locationBtn = document.getElementById('locationBtn');
      const backBtn = document.getElementById('backBtn');
      const searchAgainBtn = document.getElementById('searchAgainBtn');

      // Event Listeners
      submitBtn.addEventListener('click', handleCitySubmit);
      locationBtn.addEventListener('click', handleLocationRequest);
      backBtn.addEventListener('click', showSearchScreen);
      searchAgainBtn.addEventListener('click', showSearchScreen);
      

location.onclick = async () => {
  try {
    const position = await new Promise((sahi_h, error_bc) => {
      navigator.geolocation.getCurrentPosition(sahi_h, error_bc);
    });
    const userLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    let weather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${userLocation.latitude},${userLocation.longitude}`
    );
    const data = await weather.json();
    console.log(data);
    
  } catch (error_bc) {
    console.log("hag_diya yaha:", error_bc);
    window.alert("Failed to detect your location");
  }
};

submit.onclick = async () => {
  try {
    let city = document.getElementById("city").value;
    let weather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
    );
    const data = await weather.json();
    console.log(data);
    
    //////////
  } catch (error_bc) {
    console.log("hag_diya yaha:", error_bc);
    window.alert("Failed to detect your location");
  }
};
