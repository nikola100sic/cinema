import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/layout/Layout';
import Button from './components/shared/button/Button';

function App() {
  return (
    <Router>
      <Layout></Layout>
    </Router>
  );
}

export default App;
