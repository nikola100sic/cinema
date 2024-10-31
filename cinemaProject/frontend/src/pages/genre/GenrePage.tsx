import React, { useEffect, useState } from 'react';
import { Genre } from '../../types/Genre';
import { useNavigate } from 'react-router-dom';
import genreServiceAxios from '../../components/api/genre.service.axios';
import GenreCard from '../../components/ui/GenreCard/GenreCard';
import Loader from '../../components/shared/loader/Loader';
import { CardContainer } from './GenrePage.styled';

const GenrePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getGenres = async () => {
    try {
      const res = await genreServiceAxios.getGenres();
      console.log(res.data);
      setGenres(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <CardContainer>
          {genres.map((genre) => (
            <GenreCard key={genre.id} name={genre.name} />
          ))}
        </CardContainer>
      )}
    </>
  );
};

export default GenrePage;
