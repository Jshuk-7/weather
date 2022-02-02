const body = document.body;
const header = document.createElement('h1');
const container = document.createElement('div');
const cityInputForm = document.createElement('form');
const cityInputLabel = document.createElement('label');
const cityInputField = document.createElement('input');
const imageEl = document.createElement('img');
const weatherInformationDiv = document.createElement('div');
const cityName = document.createElement('h2');
const weatherCondition = document.createElement('h4');
const temperature = document.createElement('h2');

header.textContent = 'Weather';
container.classList.add('container');
cityInputLabel.textContent = 'Enter a location for weather information';
cityInputLabel.htmlFor = 'city';
cityInputField.type = 'text';
cityInputField.name = 'city';
imageEl.src = 'https://via.placeholder.com/400x300';
weatherInformationDiv.classList.add('weather-info-div');
cityName.classList.add('city-name');
cityName.textContent = 'City Name';
weatherCondition.classList.add('weather-condition');
weatherCondition.textContent = 'Weather Condition';
temperature.classList.add('temperature');
temperature.textContent = 'Temp °F';

cityInputForm.append(cityInputLabel, cityInputField);
weatherInformationDiv.append(cityName, weatherCondition, temperature);
container.append(cityInputForm);
body.append(header, container);

const updateUi = data => {
  // destucture properties
  const { cityDetails, weather } = data;

  // update details template
  weatherInformationDiv.innerHTML = `
    <h2 class='city-name'>${cityDetails.EnglishName}</h2>
    <h4 class='weather-condition'>${weather.WeatherText}</h4>
    <h2 class='temperature'>${
      (weather.Temperature.Metric.Value / 5) * 9 + 32
    } °F</h2>
  `;

  let imageSource = weather.IsDayTime
    ? './assets/img/day.jpeg'
    : './assets/img/night.jpeg';

  const icon1 = cloud;
  const icon2 = wind;
  const icon3 = bolt;
  const icon4 = smog;
  const icon5 = sun;
  const icon6 = temp_low;
  const icon7 = temp_high;
  const icon8 = cloud_showers_heavy;
  const icon9 = cloud_rain;
  const icon10 = cloud_moon_rain;
  const icon11 = cloud_moon;
  const icon12 = cloud_sun_rain;
  const icon13 = cloud_sun;
  const icon14 = moon;
  const icon15 = snowflake;
  const icon16 = cloud;
  const icon17 = wind;
  const icon18 = bolt;
  const icon19 = smog;
  const icon20 = snowflake;
  const icon21 = temp_low;
  const icon22 = temp_high;
  const icon23 = cloud_showers_heavy;
  const icon24 = cloud_rain;
  const icon25 = cloud_moon_rain;
  const icon26 = cloud_moon;
  const icon27 = cloud_sun_rain;
  const icon28 = cloud_sun;
  const icon29 = moon;
  const icon30 = snowflake;
  const icon31 = cloud;
  const icon32 = wind;
  const icon33 = bolt;
  const icon34 = smog;
  const icon35 = sun;
  const icon36 = temp_low;
  const icon37 = temp_high;
  const icon38 = cloud_showers_heavy;
  const icon39 = cloud_rain;
  const icon40 = cloud_moon_rain;
  const icon41 = cloud_moon;
  const icon42 = cloud_sun_rain;
  const icon43 = cloud_sun;
  const icon44 = moon;

  const array = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
    icon16,
    icon17,
    icon18,
    icon19,
    icon20,
    icon21,
    icon22,
    icon23,
    icon24,
    icon25,
    icon26,
    icon27,
    icon28,
    icon29,
    icon30,
    icon31,
    icon32,
    icon33,
    icon34,
    icon35,
    icon36,
    icon37,
    icon38,
    icon39,
    icon40,
    icon41,
    icon42,
    icon43,
    icon44,
  ];

  let icon = weather.WeatherIcon;
  let iconEl = document.createElement('i');
  iconEl.classList.add(fas, array[icon]);

  imageEl.src = imageSource;
  imageEl.style['width'] = '400px';
  weatherInformationDiv.prepend(iconEl);
  container.append(imageEl, weatherInformationDiv);
};

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather };
};

cityInputForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  // get city value
  const city = cityInputForm.city.value.trim();
  cityInputForm.reset();

  // update ui with new city
  updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));
});
