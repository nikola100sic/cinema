import Button from '../../shared/button/Button';
import { DateSelector } from './DateSelector.styled';

interface DateButtonSelectorProps {
  onDateSelect: (date: string) => void;
  selectedDate: string;
}

const DateButtonSelector = ({
  onDateSelect,
  selectedDate,
}: DateButtonSelectorProps) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateDates = () => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const formattedDate = date.toISOString().split('T')[0];
      const dayOfWeek = daysOfWeek[date.getDay()];

      dates.push({
        display: `${dayOfWeek}, ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`,
        value: formattedDate,
      });
    }
    return dates;
  };

  const dates = generateDates();

  const handleClick = (date: string) => {
    onDateSelect(date);
  };

  return (
    <DateSelector>
      {dates.map(({ display, value }) => (
        <Button
          text={display}
          key={value}
          color={selectedDate === value ? '#005eff' : '#ffffff4d'}
          textColor="white"
          onClick={() => handleClick(value)}
        />
      ))}
    </DateSelector>
  );
};

export default DateButtonSelector;
