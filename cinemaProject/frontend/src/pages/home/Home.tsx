import React, { useEffect, useState } from 'react';
import { StyledHome, StyledMarqueeText, StyledScreenings } from './Home.styled';
import DateButtonSelector from '../../components/ui/DataSelector/DateButtonSelector';
import Button from '../../components/shared/button/Button';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showMarquee, setShowMarquee] = useState(true);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    console.log('Selected date', date);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarquee(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showMarquee && (
        <StyledMarqueeText>
          <p>
            Welcome to the world of movies! Don't miss out! New at our cinema:
            <b>Joker movie premiere.</b> Tickets starting at just{' '}
            <i>199.99 RSD </i>.
          </p>
        </StyledMarqueeText>
      )}
      <StyledHome>
        <DateButtonSelector onDateSelect={handleDateSelect} />
        <StyledScreenings />
      </StyledHome>
    </>
  );
};

export default Home;
