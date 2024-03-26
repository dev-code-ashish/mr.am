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
        <div className="my-5">
            <h2 className="text-2xl">LIVE WEATHER APP</h2>
        </div>
        {Object.keys(selectedResult).length > 0 && (
          <div className="flex justify-center items-center mt-6">
            <FaMapMarkerAlt className="w-6 h-6 object-contain"/>
            <div className="text-center pl-2 text-foregroundColor text-2xl font-medium ">
              {selectedResult.name}
            </div>
          </div>
        )}
        <WeatherSearch
          latitude={location.latitude}
          longitude={location.longitude}
          onClickResultHandler={onClickResultHandler}
        />
        <WeatherHeader
          currentTemp={currentData?.currentTemp}
          highTemp={currentData?.highTemp}
          lowTemp={currentData?.lowTemp}
          highFeelsLike={currentData?.highFeelsLike}
          lowFeelsLike={currentData?.lowFeelsLike}
          windSpeed={currentData?.windSpeed}
          precip={currentData?.precip}
          iconCode={currentData?.iconCode}
        />
        <section className="flex justify-between items-center xl:flex-row flex-col">
          {dailyData.map((item, index) => (
            <DayCard
              key={index}
              iconCode={item.iconCode}
              timestamp={item.timestamp}
              degree={item.maxTemp}
            />
          ))}
        </section>
  
        <table className="w-full text-center border-spacing-0 my-5">
          <tbody>
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