import React, { useEffect, useState } from 'react';
import { Genre } from '../../types/Genre';
import { useNavigate } from 'react-router-dom';
import genreServiceAxios from '../../components/api/genre.service.axios';
import { error } from 'console';

const GenrePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getGenres = async () => {
    try {
      const res = await genreServiceAxios.getGenres();
      console.log(res.data);
      setGenres(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);
  return <div></div>;
};

export default GenrePage;
