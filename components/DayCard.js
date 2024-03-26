import { getIcon } from "../util/IconCode";
import { formatTimestampToDay } from "../util/Date";

export default function DayCard({
  iconCode = 999,
  timestamp = 999,
  degree = 32,
  ...props
}) {
  const Icon = getIcon(iconCode);
  const dayDate = formatTimestampToDay(timestamp);

  return (
    <div className={`flex flex-col items-center justify-center border border-foregroundColor rounded-md p-0.5 ${props.className}`}>
      <div><Icon className="w-16 h-16" /></div>
      <div className="text-base text-foregroundSecondaryColor mt-0.5">
        {dayDate}
      </div>
      <div>{degree}&deg;</div>
    </div>
  );
}
