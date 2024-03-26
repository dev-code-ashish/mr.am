import { useEffect, useState } from "react";
import WeatherResult from "./WeatherResult";
import { getCities } from "../api/APICalls";

export default function WeatherSearch({
  latitude = 10,
  longitude = 10,
  onClickResultHandler,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedResult, setSelectedResult] = useState({});

  useEffect(() => {
    if (searchValue.length >= 3) {
      const getSearchData = async () => {
        const result = await getCities(searchValue);
        setSearchResult(result);
      };
      getSearchData();
    } else {
      setSearchResult([]);
    }
  }, [searchValue]);

  return (
    <div className="flex justify-between items-center xl:flex-row flex-col gap-x-8 mb-5 p-1">
      <div className="flex flex-col">
        <label className="">
          SEARCH CITY
        </label>
        <input
          className="input"
          placeholder="Input City"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
          <WeatherResult
            searchResult={searchResult}
            onClickResultHandler={(item) => {
              setSearchResult([]);
              setSelectedResult(item);
              onClickResultHandler(item);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="">
          Latitude
        </label>
        <input
          className="input"
          defaultValue={
            Object.keys(selectedResult).length > 0
              ? selectedResult.latitude
              : latitude
          }
          disabled
        />
      </div>
      <div className="flex flex-col">
        <label className="">
          Longitude
        </label>
        <input
          className="input"
          defaultValue={
            Object.keys(selectedResult).length > 0
              ? selectedResult.longitude
              : longitude
          }
          disabled
        />
      </div>
    </div>
  );
}
