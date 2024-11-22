import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/ui/MovieCard/MovieCard';
import { Movie } from '../../types/Movie';
import movieServiceAxios from '../../components/api/movie.service.axios';
import Loader from '../../components/shared/loader/Loader';
import { MovieCardContainer } from './MoviePage.styled';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/shared/button/Button';
import Pagination from '../../components/shared/pagination/Pagination';
import {
  AddButton,
  AddButtonContainer,
} from '../../components/shared/forms/Forms.styled';

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const navigate = useNavigate();

  const getMovies = async (pageNo: number) => {
    setLoading(true);
    try {
      const res = await movieServiceAxios.getMovies(pageNo);
      setMovies(res.data);
      const totalPages = res.headers['total-pages'];
      setTotalPages(totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const goToAdd = () => {
    navigate('/movies/add');
  };

  const goToEdit = (movieId: any) => {
    navigate('edit/' + movieId);
  };

  const handleDelete = (movieId: number) => {
    toast(
      <>
        <div>Are you sure you want to delete this genre?</div>
        <Button
          text="Yes"
          variant="filled"
          onClick={() => confirmDelete(movieId)}
          color="#0052f779"
        />
        <Button
          text="No"
          variant="outlined"
          onClick={() => toast.dismiss()}
          color="rgba(247, 0, 0, 0.507)"
        />
      </>,
      {
        autoClose: false,
        closeButton: false,
      },
    );
  };

  const confirmDelete = (id: number) => {
    toast.dismiss();

    movieServiceAxios
      .deleteMovie(id)
      .then((res) => {
        console.log(res);
        toast.success('Successfully deleted');
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== id),
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error');
      });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <AddButtonContainer>
        <AddButton onClick={() => goToAdd()}>Add new movie</AddButton>
      </AddButtonContainer>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <MovieCardContainer>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.name}
              id={movie.id}
              duration={movie.duration}
              imageUrl={movie.imageUrl}
              genres={movie.genres}
              onDelete={handleDelete}
              onEdit={goToEdit}
            />
          ))}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </MovieCardContainer>
      )}
    </>
  );
};

export default MoviePage;
