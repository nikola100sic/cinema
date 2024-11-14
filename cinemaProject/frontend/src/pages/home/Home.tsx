import React, { useEffect, useState } from 'react';
import { StyledHome, StyledMarqueeText, StyledScreenings } from './Home.styled';
import DateButtonSelector from '../../components/ui/DataSelector/DateButtonSelector';
import MovieScreeningCard from '../../components/ui/MovieScreeningCard/MovieScreeningCard';
import screeningServiceAxios from '../../components/api/screening.service.axios';
import { MovieScreening } from '../../types/MovieScreening';
import { Details } from '../../components/ui/MovieScreeningCard/MovieScreeningCard.styled';
import Dropdown from '../../components/shared/dropdown/Dropdown';

const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

const Home = () => {
  const todayDate = formatDate(new Date());
  const [screenings, setScreening] = useState<MovieScreening[]>([]);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [showMarquee, setShowMarquee] = useState(true);
  const [noScreenings, setNoScreenings] = useState(false);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarquee(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const getScreenings = async (date: string) => {
    try {
      const res = await screeningServiceAxios.getScreenings(date);
      setScreening(res.data);
      console.log(res.data);
      setNoScreenings(false);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setNoScreenings(true);
        setScreening([]);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getScreenings(selectedDate);
  }, [selectedDate]);

  return (
    <>
      {showMarquee && (
        <StyledMarqueeText>
          <p>
            Welcome to the world of movies! Don't miss out! New at our cinema:
            <b>Joker movie premiere.</b> Tickets starting at just
            <i>199.99 RSD </i>.
          </p>
        </StyledMarqueeText>
      )}
      <StyledHome>
        <>
          <DateButtonSelector onDateSelect={handleDateSelect} />
        </>
        <>
          <StyledScreenings>
            <Details>Screenings for date: {selectedDate}</Details>
            {noScreenings ? (
              <Details>No screenings available for the selected date.</Details>
            ) : (
              screenings.map((movieScreening) => (
                <MovieScreeningCard
                  key={movieScreening.id}
                  name={movieScreening.name}
                  duration={movieScreening.duration}
                  genres={movieScreening.genres}
                  image={movieScreening.image}
                  rating={movieScreening.rating}
                  screenings={movieScreening.screenings}
                />
              ))
            )}
          </StyledScreenings>
        </>
      </StyledHome>
    </>
  );
};

export default Home;
