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
    toast(
      <div>
        <div>Are you sure you want to delete this genre?</div>
        <Button
          text="Yes"
          variant="filled"
          onClick={() => confirmDelete(id)}
          color="#0052f779"
        />
        <Button
          text="No"
          variant="outlined"
          onClick={() => toast.dismiss()}
          color="rgba(247, 0, 0, 0.507)"
        />
      </div>,
      {
        autoClose: false,
        closeButton: false,
      },
    );
  };

  const confirmDelete = (id: number) => {
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

  const goToEdit = (genreId: any) => {
    navigate('edit/' + genreId);
  };

  return (
    <>
      <AddButtonContainer>
        <AddButton onClick={() => goToAdd()}>Add new genre</AddButton>
      </AddButtonContainer>
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
              onEdit={goToEdit}
            />
          ))}
        </CardContainer>
      )}
    </>
  );
};

export default GenrePage;
