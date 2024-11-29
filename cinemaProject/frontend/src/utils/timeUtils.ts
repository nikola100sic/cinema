export const formatTime = (timeString: string) => {
  const date = new Date(`1970-01-01T${timeString}Z`);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return `${date.getHours()}:00`;
};
