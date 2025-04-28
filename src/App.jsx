import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from './Routes';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AuthRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
