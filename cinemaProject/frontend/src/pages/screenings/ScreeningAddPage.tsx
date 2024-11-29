import React, { useEffect, useState } from 'react';
import movieServiceAxios from '../../components/api/movie.service.axios';
import { Movie } from '../../types/Movie';
import { Hall } from '../../types/Hall';
import hallServiceAxios from '../../components/api/hall.service.axios';
import {
  AddScreeningContainer,
  ButtonContainer,
  FormLabel,
  ScreeningFormInput,
  ScreeningFormTitle,
} from '../../components/shared/forms/Forms.styled';
import Dropdown from '../../components/shared/dropdown/Dropdown';
import Button from '../../components/shared/button/Button';
import { toast } from 'react-toastify';
import screeningServiceAxios from '../../components/api/screening.service.axios';
import { useNavigate } from 'react-router-dom';
import { ScreeningAdd } from '../../types/ScreeningAdd';

const ScreeningAddPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [halls, setHalls] = useState<Hall[]>([]);
  const [screening, setScreening] = useState<ScreeningAdd>({
    id: 0,
    screening_time: '',
    screening_date: '',
    ticket_price: 0,
    hall: {
      id: 0,
      name: '',
      hallNumber: 0,
      capacity: 0,
    },
    movie: {
      id: 0,
      name: '',
      duration: 0,
      imageUrl: '',
      genres: [],
    },
  });
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const res = await movieServiceAxios.getAllMovies();
      setMovies(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getHalls = async () => {
    try {
      const res = await hallServiceAxios.getHalls();
      setHalls(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
    getHalls();
  }, []);

  const handleMovieChange = (movie: Movie) => {
    setScreening((prevScreening) => ({
      ...prevScreening,
      movie: movie,
    }));
  };

  const handleHallChange = (hall: Hall) => {
    setScreening((prevScreening) => ({
      ...prevScreening,
      hall: hall,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !screening.screening_date ||
      !screening.screening_time ||
      !screening.movie.id ||
      !screening.hall.id
    ) {
      toast.warn('Please fill in all fields.');
      return;
    }
    console.log(screening);
    screeningServiceAxios
      .addScreening(screening)
      .then((res) => {
        toast.success('Screening added successfully!');
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);

        if (error.response && error.response.status === 400) {
          toast.error(error.response.data);
        } else {
          toast.error('An unexpected error occurred');
        }
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setScreening((prevScreening) => ({
      ...prevScreening,
      [name]: value,
    }));
  };

  return (
    <AddScreeningContainer>
      <ScreeningFormTitle>Add new screening</ScreeningFormTitle>
      <FormLabel>Screening time:</FormLabel>
      <form onSubmit={handleSubmit}>
        <ScreeningFormInput
          name="screening_time"
          type="time"
          onChange={handleChange}
        />
        <FormLabel>Screening date:</FormLabel>
        <ScreeningFormInput
          name="screening_date"
          type="date"
          onChange={handleChange}
        />
        <FormLabel>Ticket price</FormLabel>
        <ScreeningFormInput
          name="ticket_price"
          type="number"
          placeholder="Enter ticket price for screening"
          onChange={handleChange}
        />
        <FormLabel>Select movie:</FormLabel>
        <Dropdown
          label="movieId"
          type="big"
          color="white"
          textColor="black"
          options={movies.map((movie) => ({ id: movie.id, name: movie.name }))}
          selectedValue={screening.movie.id}
          onChange={(movieId) => {
            const selectedMovie = movies.find((movie) => movie.id === movieId);
            if (selectedMovie) {
              handleMovieChange(selectedMovie);
            }
          }}
        />
        <FormLabel>Select hall:</FormLabel>
        <Dropdown
          label="hallId"
          type="big"
          color="white"
          textColor="black"
          options={halls.map((hall) => ({
            id: hall.id,
            name: `Hall N° ${hall.hallNumber}`,
          }))}
          selectedValue={screening.hall.id}
          onChange={(hallId) => {
            const selectedHall = halls.find((hall) => hall.id === hallId);
            if (selectedHall) {
              handleHallChange(selectedHall);
            }
          }}
        />
        <ButtonContainer>
          <Button text="Add screening" type="submit" />
        </ButtonContainer>
      </form>
    </AddScreeningContainer>
  );
};

export default ScreeningAddPage;
