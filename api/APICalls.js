import axios from "axios";

export async function getWeather(lat, lon, timezone) {
  return await axios
    .get(
      "https://api.open-meteo.com/v1/forecast?current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime",
      {
        params: {
          latitude: lat,
          longitude: lon,
          timezone,
        },
      }
    )
    .then((response) => {
      return {
        current: parseCurrentWeather(response.data),
        daily: parseDailyWeather(response.data),
        hourly: parseHourlyWeather(response.data),
      };
    });
}

function parseCurrentWeather({ current, daily }) {
  const {
    temperature_2m: currentTemp,
    wind_speed_10m: windSpeed,
    weather_code: iconCode,
  } = current;
  const {
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    apparent_temperature_max: [maxFeelsLike],
    apparent_temperature_min: [minFeelsLike],
    precipitation_sum: [precip],
  } = daily;

  return {
    currentTemp: Math.round(currentTemp),
    highTemp: Math.round(maxTemp),
    lowTemp: Math.round(minTemp),
    highFeelsLike: Math.round(maxFeelsLike),
    lowFeelsLike: Math.round(minFeelsLike),
    windSpeed: Math.round(windSpeed),
    precip: Math.round(precip * 100) / 100,
    iconCode: iconCode,
  };
}

function parseDailyWeather({ daily }) {
  return daily.time.map((time, index) => {
    return {
      timestamp: time * 1000, //second to milliseconds
      iconCode: daily.weather_code[index],
      maxTemp: Math.round(daily.temperature_2m_max[index]),
    };
  });
}

function parseHourlyWeather({ hourly, current }) {
  return hourly.time
    .map((time, index) => {
      return {
        timestamp: time * 1000,
        iconCode: hourly.weather_code[index],
        maxTemp: Math.round(hourly.temperature_2m[index]),
        feelsLike: Math.round(hourly.apparent_temperature[index]),
        windSpeed: Math.round(hourly.wind_speed_10m[index]),
        precip: Math.round(hourly.precipitation[index] * 100) / 100,
      };
    })
    .filter(({ timestamp }) => timestamp >= current.time * 1000);
}

export async function getCities(cityName) {
  return await axios
    .get(
      "https://geocoding-api.open-meteo.com/v1/search?count=3&language=en&format=json",
      {
        params: {
          name: cityName,
        },
      }
    )
    .then((response) => {
      return parseCityData(response.data);
    });
}

function parseCityData(data) {
  return data.results?.map((item) => {
    return {
      id: item.id,
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
    };
  }) ?? [];
}
