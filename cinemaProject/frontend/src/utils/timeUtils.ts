export const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  const formattedHours = date.getHours().toString().padStart(2, '0');
  const formattedMinutes = date.getMinutes().toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};
