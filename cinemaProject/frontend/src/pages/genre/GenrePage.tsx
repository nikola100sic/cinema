import React, { useEffect, useState } from 'react';
import { Genre } from '../../types/Genre';
import { useNavigate } from 'react-router-dom';
import genreServiceAxios from '../../components/api/genre.service.axios';
import GenreCard from '../../components/ui/GenreCard/GenreCard';
import Loader from '../../components/shared/loader/Loader';
import {
  AddButton,
  AddButtonContainer,
  CardContainer,
} from './GenrePage.styled';
import { toast } from 'react-toastify';
import Button from '../../components/shared/button/Button';

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

  const handleDelete = (id: number) => {
    console.log(`Handle delete called with id: ${id}`); // Debug log
    console.log('Attempting to show toast'); // Debug log
    toast(
      <div>
        <div>Are you sure you want to delete this genre?</div>
        <Button text="Yes" variant="filled" onClick={() => confirmDelete(id)} />
        <Button text="No" variant="outlined" onClick={() => toast.dismiss()} />
      </div>,
      {
        autoClose: false,
        closeButton: false,
      },
    );
  };

  const confirmDelete = (id: number) => {
    console.log(`Attempting to confirm delete for genre with id: ${id}`); // Debug log
    toast.dismiss();

    genreServiceAxios
      .deleteGenre(id)
      .then((res) => {
        console.log(res);
        toast.success('Successfully deleted');
        setGenres((prevGenres) =>
          prevGenres.filter((genre) => genre.id !== id),
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error');
      });
  };

  const goToAdd = () => {
    navigate('/genres/add');
  };

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <CardContainer>
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              name={genre.name}
              id={genre.id}
              onDelete={handleDelete}
            />
          ))}
        </CardContainer>
      )}
      <AddButtonContainer>
        <AddButton onClick={() => goToAdd()}>Add new genre</AddButton>
      </AddButtonContainer>
    </>
  );
};

export default GenrePage;
