import React, { useEffect, useState } from 'react';
import {
  ButtonContainerHome,
  StyledHome,
  StyledMarqueeText,
  StyledScreenings,
} from './Home.styled';
import DateButtonSelector from '../../components/ui/DataSelector/DateButtonSelector';
import MovieScreeningCard from '../../components/ui/MovieScreeningCard/MovieScreeningCard';
import screeningServiceAxios from '../../components/api/screening.service.axios';
import { MovieScreening } from '../../types/MovieScreening';
import { Details } from '../../components/ui/MovieScreeningCard/MovieScreeningCard.styled';
import Dropdown from '../../components/shared/dropdown/Dropdown';
import genreServiceAxios from '../../components/api/genre.service.axios';
import { Genre } from '../../types/Genre';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../utils/authUtils';

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const Home = () => {
  const todayDate = formatDate(new Date());
  const [screenings, setScreening] = useState<MovieScreening[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [selectedGenre, setSelectedGenre] = useState<number>(0);
  const [showMarquee, setShowMarquee] = useState(true);
  const [noScreenings, setNoScreenings] = useState(false);

  const navigate = useNavigate();
  const { isAdmin } = useAuth();

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

  const getScreenings = async (date: string, genreId?: number) => {
    try {
      const res = await screeningServiceAxios.getScreenings(
        date,
        genreId && genreId !== 0 ? genreId : undefined,
      );
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

  const getGenres = async () => {
    try {
      const res = await genreServiceAxios.getGenres();
      console.log(res.data);
      setGenres(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenreChange = (genreId: number) => {
    setSelectedGenre(genreId);
    getScreenings(selectedDate, genreId);
  };

  useEffect(() => {
    getScreenings(selectedDate, selectedGenre);
    getGenres();
  }, [selectedDate, selectedGenre]);

  const goToAdd = () => {
    navigate('/screenings/add');
  };

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
        <DateButtonSelector
          onDateSelect={handleDateSelect}
          selectedDate={selectedDate}
        />
        <StyledScreenings>
          <ButtonContainerHome>
            {isAdmin && (
              <Button
                text="Add new screening"
                color="#00bcf7"
                onClick={goToAdd}
              />
            )}
          </ButtonContainerHome>
          <Dropdown
            label="Select Genre"
            options={genres}
            selectedValue={selectedGenre}
            onChange={handleGenreChange}
          />
          <Details>
            {selectedDate === todayDate
              ? 'Screening for today'
              : 'Screening for: ' + selectedDate}
          </Details>

          {noScreenings ? (
            <Details>
              No screenings available for the selected criteria.
            </Details>
          ) : (
            screenings.map((movieScreening) => (
              <MovieScreeningCard
                key={movieScreening.id}
                data={movieScreening}
              />
            ))
          )}
        </StyledScreenings>
      </StyledHome>
    </>
  );
};

export default Home;
