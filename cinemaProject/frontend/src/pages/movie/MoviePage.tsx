import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/ui/MovieCard/MovieCard';
import { Movie } from '../../types/Movie';
import movieServiceAxios from '../../components/api/movie.service.axios';
import Loader from '../../components/shared/loader/Loader';
import {
  AddButton,
  AddButtonContainer,
  MovieCardContainer,
} from './MoviePage.styled';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/shared/button/Button';
import Pagination from '../../components/shared/pagination/Pagination';

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const navigate = useNavigate();

  const getMovies = () => {
    movieServiceAxios
      .getMovies()
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
        const totalPages = res.headers['total-pages'];
        setTotalPages(totalPages);
        console.log(totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

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
              image={movie.image}
              genres={movie.genres}
              onDelete={handleDelete}
              onEdit={goToEdit}
            />
          ))}
          <Pagination
            totalPages={totalPages}
            currentPage={1}
            onPageChange={handlePageChange}
          ></Pagination>
        </MovieCardContainer>
      )}
    </>
  );
};

export default MoviePage;
