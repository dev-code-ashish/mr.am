import { getIcon } from "../util/IconCode";
import { formatTimestampToDay, formatTimestampToNumericHour } from "../util/Date";

export default function WeatherTableRow({
  timestamp = 999,
  iconCode = 999,
  maxTemp = 31,
  feelsLike = 30,
  windSpeed = 19,
  precip = 0.1,
}) {

  const Icon = getIcon(iconCode);
  const dayDate = formatTimestampToDay(timestamp);
  const hourDate = formatTimestampToNumericHour(timestamp);

  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col items-center ">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">{dayDate}</div>
          <div className="uppercase">{hourDate}</div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <Icon className="w-12 h-12 object-contain" />
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">TEMP</div>
          <div>{maxTemp}&deg;</div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">FL TEMP</div>
          <div>{feelsLike}&deg;</div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">WIND</div>
          <div>
            {windSpeed}<span className="font-normal text-sm">mph</span>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col items-center">
          <div className="uppercase font-bold text-xs text-foregroundSecondaryColor">PRECIP</div>
          <div>
            {precip}<span className="font-normal text-sm ml-1">in</span>
          </div>
        </div>
      </td>
    </tr>
  );
}
