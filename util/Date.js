const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "numeric", hour12: true });

export function formatTimestampToDay(timestamp) {
  let day = "";
  if (timestamp) {
    day = DAY_FORMATTER.format(timestamp);
  }
  return day;
}

export function formatTimestampToNumericHour(timestamp) {
  let hour = "";
  if (timestamp) {
    hour = HOUR_FORMATTER.format(timestamp);
  }
  return hour;
}
