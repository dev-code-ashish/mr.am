import { FaMapMarkerAlt } from "react-icons/fa";
import { getIcon } from "../util/IconCode";
import DayCard from "./DayCard";

export default function WeatherHeader({
    hourlyDisplayData = [],
    dailyData = [],
    selectedCity = "",
    currentTemp = 31,
    highTemp = 32,
    lowTemp = 9,
    highFeelsLike = 30,
    lowFeelsLike = 20,
    windSpeed = 9,
    precip = 0.1,
    iconCode = 999,
}) {
    const Icon = getIcon(iconCode);
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
                    <div className="px-5 pt-5 pb-3 relative">
                        <div className="flex mb-4 justify-between items-center">
                            <div>
                                <h5 className="flex mb-0 font-medium text-xl">{selectedCity}</h5>
                                <h6 className="mb-0">April 04 2021</h6><small>Cloudy</small>
                            </div>
                            <div className="text-right flex">
                                {Icon && <Icon className="w-9 h-9 object-contain" />}
                                <h3 className="font-bold text-4xl mb-0 ml-2"><span>{currentTemp}&deg;</span></h3>
                            </div>
                        </div>
                        <div className="block sm:flex justify-between items-center flex-wrap">
                            <div className="w-full sm:w-1/2">
                                <div className="flex mb-2 justify-between items-center"><b>HIGH</b><small className="px-5 inline-block">{highTemp}&nbsp;&deg;</small></div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="flex mb-2 justify-between items-center"><b>FL HIGH</b><small className="px-5 inline-block">{highFeelsLike}&nbsp;&deg;</small></div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="flex mb-2 justify-between items-center"><b>LOW</b><small className="px-5 inline-block">{lowTemp}&nbsp;&deg;</small></div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="flex mb-2 justify-between items-center"><b>FL LOW</b><small className="px-5 inline-block">{lowFeelsLike}&nbsp;&deg;</small></div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="flex mb-2 justify-between items-center"><b>WIND</b><small className="px-5 inline-block">{windSpeed}&nbsp;mph</small></div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="flex mb-2 justify-between items-center"><b>PRECIP</b><small className="px-5 inline-block">{precip}&nbsp;in</small></div>
                            </div>
                        </div>
                    </div>
                    <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span className="inline-block px-3"><small>Forecast</small></span></div>
                    
                    <div className="px-5 py-5 pt-4 relative overflow-x-auto">
                        <div className="text-center justify-between items-center flex" style={{flexFlow: 'initial'}}>
                            {dailyData.map((item, index) => (
                                <DayCard
                                    key={index}
                                    iconCode={item.iconCode}
                                    timestamp={item.timestamp}
                                    degree={item.maxTemp}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
