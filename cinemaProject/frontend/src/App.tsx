import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/layout/Layout';
import { ToastContainer } from 'react-toastify';
import GenrePage from './pages/genre/GenrePage';
import 'react-toastify/dist/ReactToastify.css';
import GenreAddPage from './pages/genre/GenreAddPage';
import GenreEditPage from './pages/genre/GenreEditPage';
import MoviePage from './pages/movie/MoviePage';
import MovieAddPage from './pages/movie/MovieAddPage';
import { GlobalStyle } from './components/ui/GlobalStyle/GlobalStyled';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/genres" element={<GenrePage />} />
            <Route path="/genres/add" element={<GenreAddPage />} />
            <Route path="/genres/edit/:id" element={<GenreEditPage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/add" element={<MovieAddPage />} />
          </Routes>
        </Layout>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        rtl={false}
        pauseOnFocusLoss
        theme="light"
        style={{
          position: '-moz-initial',
          top: '5%',
          zIndex: 9999,
        }}
      />
    </>
  );
}

export default App;
