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
import Pagination from '../../components/shared/pagination/Pagination';

const GenrePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const navigate = useNavigate();

  const getGenres = async (pageNo: number) => {
    setLoading(true);
    try {
      const res = await genreServiceAxios.getGenresSearch(pageNo);
      setGenres(res.data);
      const totalPages = res.headers['total-pages'];
      setTotalPages(totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGenres(currentPage);
  }, [currentPage]);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </CardContainer>
      )}
    </>
  );
};

export default GenrePage;
