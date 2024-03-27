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
    <div className="text-center mb-0 flex items-center justify-center flex-col px-2">
      <span className="block my-1">{dayDate}</span>
      <Icon className="w-8 h-8" />
      <span className="block my-1">{degree}&deg;</span>
    </div>
  );
}
