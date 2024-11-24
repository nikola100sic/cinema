import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './components/ui/GlobalStyle/GlobalStyled';
import MoviePage from './pages/movies/MoviePage';
import MovieAddPage from './pages/movies/MovieAddPage';
import MovieEditPage from './pages/movies/MovieEditPage';
import GenrePage from './pages/genres/GenrePage';
import GenreAddPage from './pages/genres/GenreAddPage';
import GenreEditPage from './pages/genres/GenreEditPage';
import Home from './pages/home/Home';
import ScreeningAddPage from './pages/screenings/ScreeningAddPage';
import ContactPage from './pages/contact/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegistrationPage from './pages/auth/RegistrationPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/genres" element={<GenrePage />} />
            <Route path="/genres/add" element={<GenreAddPage />} />
            <Route path="/genres/edit/:id" element={<GenreEditPage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/add" element={<MovieAddPage />} />
            <Route path="/movies/edit/:id" element={<MovieEditPage />} />
            <Route path="/screenings/add" element={<ScreeningAddPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </Layout>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
        style={{
          position: '-moz-initial',
          top: '9%',
          zIndex: 9999,
        }}
      />
    </>
  );
}

export default App;
