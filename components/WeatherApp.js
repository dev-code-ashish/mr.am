import {
    getWeather,
  } from "../api/APICalls";
  import { FaMapMarkerAlt } from "react-icons/fa";
  import { useCallback, useEffect, useState } from "react";
  import DayCard from "../components/DayCard";
  import WeatherHeader from "../components/WeatherHeader";
  import WeatherTableRow from "../components/WeatherTableRow";
  import WeatherSearch from "./WeatherSearch";
  
  const HOURLY_DATA_DISPLAY_LIMIT = 10;
  
  export default function WeatherApp() {
    const [currentData, setCurrentData] = useState();
    const [dailyData, setDailyData] = useState([]);
    const [hourlyData, setHourlyData] = useState([]);
    const [selectedResult, setSelectedResult] = useState({});
    const [currentHourlyDispayIndex, setCurrentHourlyDispayIndex] = useState(0);
    const [hourlyDisplayData, setHourlyDisplayData] = useState([]); 
    const [location, setLocation] = useState({
      latitude: 10,
      longitude: 10
    });
  
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            alert(
              "There was an error getting your location. Please allow to use your location and refresh the page."
            );
          }
        );
      }
    }, []);
  
    const limitHourlyData = useCallback(
      (data) => {
        const newData = data.slice(
          0,
          HOURLY_DATA_DISPLAY_LIMIT + currentHourlyDispayIndex
        );
        setHourlyDisplayData(newData);
      },
      [currentHourlyDispayIndex]
    );
  
    useEffect(() => {
      const getData = async () => {
        const latitude =
          Object.keys(selectedResult).length > 0
            ? selectedResult.latitude
            : location.latitude;
        const longitude =
          Object.keys(selectedResult).length > 0
            ? selectedResult.longitude
            : location.longitude;
  
        const weatherData = await getWeather(
          latitude,
          longitude,
          Intl.DateTimeFormat().resolvedOptions().timeZone
        );
  
        if (weatherData.current) {
          setCurrentData(weatherData.current);
        }
  
        if (weatherData.daily) {
          setDailyData(weatherData.daily);
        }
  
        if (weatherData.hourly) {
          limitHourlyData(weatherData.hourly);
          setHourlyData(weatherData.hourly);
        }
      };
  
      getData();
    }, [location, limitHourlyData, selectedResult]);
  
    function onClickResultHandler(item) {
      setSelectedResult(item);
    }
    
    return (
      <main className={`${currentData == null ? "blur-md" : ""} `}>
        <div className="my-5 text-center xl:text-left">
          <h5 className="flex mb-0 font-medium text-xl">WEATHER APP - Used OpenMeteo API</h5> 
        </div>
        <WeatherSearch
          latitude={location.latitude}
          longitude={location.longitude}
          onClickResultHandler={onClickResultHandler}
        />
        <WeatherHeader
          dailyData={dailyData}
          selectedCity={selectedResult.name}
          currentTemp={currentData?.currentTemp}
          highTemp={currentData?.highTemp}
          lowTemp={currentData?.lowTemp}
          highFeelsLike={currentData?.highFeelsLike}
          lowFeelsLike={currentData?.lowFeelsLike}
          windSpeed={currentData?.windSpeed}
          precip={currentData?.precip}
          iconCode={currentData?.iconCode}
        />
        <div class="overflow-x-auto">
          <table class="rounded-lg overflow-hidden w-full">
            <tbody class="bg-gray-800">
              {hourlyDisplayData.map((item, index) => (
                <WeatherTableRow
                  key={index}
                  maxTemp={item.maxTemp}
                  feelsLike={item.feelsLike}
                  precip={item.precip}
                  timestamp={item.timestamp}
                  windSpeed={item.windSpeed}
                  iconCode={item.iconCode}
                />
              ))}
            </tbody>
          </table>
        </div>
        {hourlyDisplayData.length < hourlyData.length && (
          <div className="flex justify-center items-center my-5">
            <button
              onClick={() =>
                setCurrentHourlyDispayIndex(
                  currentHourlyDispayIndex + HOURLY_DATA_DISPLAY_LIMIT
                )
              }
              className="p-4 m-4 border rounded-lg border-foregroundColor bg-foregroundColor text-white text-sm"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    );
}