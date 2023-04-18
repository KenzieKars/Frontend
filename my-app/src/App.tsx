import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <GlobalStyle/>
      <UserPage/>
    </>
  );
}

export default App;
