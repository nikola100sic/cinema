import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/layout/Layout';
import Button from './components/shared/button/Button';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <Layout></Layout>
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
