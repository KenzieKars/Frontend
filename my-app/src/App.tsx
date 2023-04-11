import HomePage from './pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <GlobalStyle/>
      <HomePage/>
    </>
  );
}

export default App;
