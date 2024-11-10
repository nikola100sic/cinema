import React from 'react';
import Button from '../../shared/button/Button';
import { DateSelector } from './DateSelector.styled';

interface DateButtonSelectorProps {
  onDateSelect: (date: string) => void;
}

const DateButtonSelector = ({ onDateSelect }: DateButtonSelectorProps) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateDates = () => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dayOfWeek = daysOfWeek[date.getDay()];

      const formattedDate = `${dayOfWeek}, ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`;
      dates.push(formattedDate);
    }
    return dates;
  };

  const dates = generateDates();

  const handleClick = (date: string) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <DateSelector>
      {dates.map((date) => (
        <Button
          text={date}
          key={date}
          color="#ffffff4d"
          textColor="white"
          onClick={() => handleClick(date)}
        />
      ))}
    </DateSelector>
  );
};

export default DateButtonSelector;
