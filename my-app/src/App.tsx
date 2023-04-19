import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

import { RoutesMain } from './routes';

function App() {
  return (
    <>
      <GlobalStyle/>
      <RoutesMain />
    </>
  );

}

export default App;
